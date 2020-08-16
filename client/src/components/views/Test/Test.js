import React, { useState } from "react"
import axios from "axios"
import { withRouter } from "react-router-dom"

function Test(props) {
  const [Name, setName] = useState("")
  const [Id, setId] = useState("")
  const [Password, setPassword] = useState("")
  const [Email, setEmail] = useState("")

  const onName = (e) => {
    setName(e.target.value)
  }
  const onId = (e) => {
    setId(e.target.value)
  }

  const onPassword = (e) => {
    setPassword(e.target.value)
  }
  const onEmail = (e) => {
    setEmail(e.target.value)
  }

  const onClickHandler = () => {
    console.log(Name)
    console.log(Id)
    console.log(Password)
    console.log(Email)

    let body = {
      name: Name,
      id: Id,
      password: Password,
      email: Email,
    }

    axios.post("/api/test", body).then((response) => {
      if (response.data.success) {
        alert("회원가입성공")
        props.history.push("/testlogin")
        console.log(response.data)
      } else {
        console.log("실패")
      }
    })
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      이름
      <input type="text" onChange={onName} />
      아이디
      <input type="text" onChange={onId} />
      비밀번호
      <input type="password" onChange={onPassword} />
      이메일
      <input type="text" onChange={onEmail} />
      <button onClick={onClickHandler}>회원가입</button>
    </div>
  )
}

export default withRouter(Test)
