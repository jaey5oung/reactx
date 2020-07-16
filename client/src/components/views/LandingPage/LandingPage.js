import React, { useEffect } from "react"
import axios from "axios"
import { withRouter } from "react-router-dom"

function LandingPage(props) {
  useEffect(() => {
    axios.get("/api/hello").then((response) => console.log(response)) //get request를 서버에 보낸다 엔드포인트에 (api/hello)
  }, []) //이후 서버에서 돌아오는 reponse를 콘솔창에 리스펜스 데이터로 출력

  const onClickHandler = () => {
    axios.get(`/api/users/logout`).then((response) => {
      if (response.data.success) {
        props.history.push("/login") //withRouter을써야 푸쉬부분을 사용할수있다
      } else {
        alert("로그아웃 하는데 실패 했습니다.")
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
      <h2>시작페이지</h2>
      <button onClick={onClickHandler}>로그아웃</button>
    </div>
  )
}

export default withRouter(LandingPage)
