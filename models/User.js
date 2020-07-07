const mongoose = require("mongoose")
//몽구스를 불러온이후에 유저 스키마를 생성한다 이후 밑에 하나하나 필드들을 작성한다
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

const User = mongoose.model("User", userSchema) // 위에 스키마를 모델로 감싸주는 작업

module.exports = { User }
