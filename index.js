const express = require("express") //익스프레스 모듈을 갖고온다 (require:요구하다)
const app = express() //새로운 함수를 만들어 새로운 익스프레스 앱을 만든다
const port = 4000 //포트는 아무렇게 해도 상관없다 4000포트를 백서버로 둔다
const bodyParser = require("body-parser")
const { User } = require("./models/User") //유저 모델에있는 정보를 가져오는것

const config = require("./config/key") //config에서 몽고키값을 가져온다

//바디파서가 클라이언트에서 오는 (밑에와같은)정보를 분석해서 가져올수있게 해주는것  (urlencoded,json)
//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

//application/json
app.use(bodyParser.json())

const mongoose = require("mongoose") //몽구스 다운이후 require로 몽구스를 불러와서 connect에 키값을 넣어준다
mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err))
//위에있는 4개의 use를쓰는이유는 이것을써야 이후에 에러를 방지할수있다
//그 뒤에 then,catch를쓰는것은 몽고디비가 연결이 잘되고있다를 알려주는것이구 안됬으면 catch로 에러를 잡아준다

app.get("/", (req, res) => res.send("i'm jaeyoung")) //익스프레스앱을 '/'(루트) 디렉토리에 넣으면 helloworld를 출력해주는것

//회원가입을 위한 라우터

app.post("/register", (req, res) => {
  //회원가입 할때 필요한 정보들을 클라이언트에서 가져오면 그것들을 데이터 베이스에 넣어 준다.
  //위에 유저모델로 갖고온것을 인스턴스로 만든다

  const user = new User(req.body) //req바디에 들어올수있는것은 위에 bodyParser가 있기떄문에가능하다

  user.save((err, userInfo) => {
    //<-콜백함수 저장할때 에러가있으면 클라이언트에 에러가있다고 전달해준다(json형식으로) 만약 성공을하면(userinfo를 클라이언트에다가 성공했다는 문구를 success로 전달한다)
    if (err) return res.json({ success: false, err })
    return res.status(200).json({
      success: true,
    })
  }) //bodyPaser에있는정보들이 저장되는것 (몽고db메소드)
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}!`)) //이후 포트4000으로 이앱을 실행시킨다 이 앱이 4000포트에 리슨을하면 이 콘솔이 프린트가 된다
