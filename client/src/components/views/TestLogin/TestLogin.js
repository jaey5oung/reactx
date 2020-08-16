import React, { useState } from "react"
import axios from "axios"
import { withRouter } from "react-router-dom"

function TestLogin(props) {
  
  
  const [Id, setId] = useState("")
  const [Password, setPassword] = useState("")

  const onId = (e) => {
    setId(e.target.value)
  }
  const onPassword = (e) => {
    setPassword(e.target.value)
  }

  const onClickHandler = () => {
    console.log(1, Id)
    console.log(2, Password)

    let body = {
      id: Id,
      password: Password,
    }

    axios.post("/api/testLogin", body).then((response) => {
      if (response.data.success) {
        console.log(response.data)
        alert("로그인성공")
        props.history.push("/goodshistory")
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
      아이디
      <input type="text" onChange={onId} />
      비밀번호
      <input type="password" onChange={onPassword} />
      <button onClick={onClickHandler}>로그인</button>
    </div>
  )
}

export default withRouter(TestLogin)
