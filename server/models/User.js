const mongoose = require("mongoose")
//몽구스를 불러온이후에 유저 스키마를 생성한다 이후 밑에 하나하나 필드들을 작성한다
const bcrypt = require("bcrypt") //빅크립트를 가져와준다
const { reset } = require("nodemon")
const saltRounds = 10 //10자리인 솔트를 만들어서 (비밀번호를 암호화한다)
const jwt = require("jsonwebtoken") //제이슨웨토큰을 가져와준다

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
    //이름은 최대 50글자까지 생성할수 있다
  },
  email: {
    type: String,
    trim: true,
    unique: 1,
    //예를들어 jaey5ou ng@naver.com 이 있는데 이렇게 스페이스가 띄어져있는경우 이것을 없애주는 역할을 trim이 한다, 똑같은 이메일은 쓰지못하게 unique를 걸어준다
  },
  password: {
    type: String,
    minlength: 5,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  role: {
    type: Number,
    default: 0,
    //role 어떤유저가 관리자가 될수도있고 그냥 일반유저가 될수도있다 그 관리자는 그 일반유저를 관리할수도있고 그래서 롤을 준다 롤은 넘버로 한다 넘버가 1이면 관리자 넘버가 0이면 일반유저 디포트는 0 임의로 롤을 지정해놓지 않으면 이 롤로 0을 주겠다
  },
  image: String,
  token: {
    type: String,
    //토큰을 이용해서 유효성을 관리할수있다
  },
  tokenExp: {
    type: Number,
    //위에 토큰이 사용할수있는 유효기간을 설정하는것
  },
})

userSchema.pre("save", function (next) {
  //솔트를 이용해서 비밀번호를 암호화 시키는작업
  //몽고db save명령어이며 index.js 유저모델에 save 하기전에 function을하고 이것이 다끝나면 userSave가 실행된다
  var user = this //유저스키마를 가르키는것
  if (user.isModified("password")) {
    //비크립트안에 패스워드만 변환시킬때 암호화해준다
    bcrypt.genSalt(saltRounds, function (err, salt) {
      //비크립트를만들어서 솔트라운지를 갖고온다 콜백함수로 에러가나면 에러를 갖고오고 아니면 솔트를 리턴시켜준다
      if (err) return next(err)

      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err)
        user.password = hash //암호화된 비밀번호를 해쉬로 교체해준다
        next()
      }) //포스트맨에 넣는 비밀번호
    })
  } else {
    next()
  }
})
//비밀번호나 이메일을 변경할때 윗쪽 userSchema를 바꾸는것

userSchema.methods.comparePassword = function (plainPassword, cb) {
  //ex)  plainpassword 1234567 암호화된 비밀번호 sdajkflsjkl2jklaj4jkd
  bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
    if (err) return cb(err)
    cb(null, isMatch)
  })
}

userSchema.methods.generateToken = function (cb) {
  //jsonwebtoken 을이용해서 토큰 생성하기
  var user = this

  var token = jwt.sign(user._id.toHexString(), "secretToken") //유저아이디와 시크릿토큰을 합쳐서 토큰이나온다 그러면 결국 시크릿토큰을 넣엇을땐 유저아이디가 나와야하는것

  user.token = token
  user.save(function (err, user) {
    if (err) return cb(err)
    cb(null, user)
  })
}

userSchema.statics.findByToken = function (token, cb) {
  var user = this
  //토큰을 decode 한다
  jwt.verify(token, "secretToken", function (err, decoded) {
    //유저아이디를 아용해서 유저를 찾은 다음에
    //클라이언트에서 가져온 token과 DB에 보관된 토큰이 일치하는지 확인

    user.findOne({ _id: decoded, token: token }, function (err, user) {
      if (err) return cb(err)
      cb(null, user)
    })
  })
}

const User = mongoose.model("User", userSchema) // 위에 스키마를 모델로 감싸주는 작업

module.exports = { User }
