const express = require("express") //익스프레스 모듈을 갖고온다 (require:요구하다)
const app = express() //새로운 함수를 만들어 새로운 익스프레스 앱을 만든다
const port = 4000 //포트는 아무렇게 해도 상관없다 4000포트를 백서버로 둔다

const mongoose = require("mongoose") //몽구스 다운이후 require로 몽구스를 불러와서 connect에 키값을 넣어준다
mongoose
  .connect(
    "mongodb+srv://tiger:5782@cluster0.j0bsa.mongodb.net/<dbname>?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err)) //
//위에있는 4개의 use를쓰는이유는 이것을써야 이후에 에러를 방지할수있다
//그 뒤에 then,catch를쓰는것은 몽고디비가 연결이 잘되고있다를 알려주는것이구 안됬으면 catch로 에러를 잡아준다
app.get("/", (req, res) => res.send("Hello World!")) //익스프레스앱을 '/'(루트) 디렉토리에 넣으면 helloworld를 출력해주는것

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`)) //이후 포트4000으로 이앱을 실행시킨다 이 앱이 4000포트에 리슨을하면 이 콘솔이 프린트가 된다
