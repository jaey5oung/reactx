import React from "react"
import { withRouter, Link } from "react-router-dom"
import styled from "styled-components"

const Sheader = styled.header`
  display: flex;
`
const Sul = styled.ul`
  display: flex;
`
const Sspan = styled.span`
  padding: 0 10px;
  justify-content: flex-start;
`

function Header(props) {
  //비구조할당
  const {
    location: { pathname },
  } = props

  return (
    <Sheader>
      <Sul>
        <Sspan current={(pathname === "/").toString()}>
          <Link to="/">회원가입</Link>
        </Sspan>
        <Sspan current={(pathname === "/testLogin").toString()}>
          <Link to="/testLogin">로그인</Link>
        </Sspan>
        <Sspan current={(pathname === "/goodsHistory").toString()}>
          <Link to="/goodsHistory">상품내역</Link>
        </Sspan>
        <Sspan current={(pathname === "/dashBoard").toString()}>
          <Link to="/dashBoard">상품등록</Link>
        </Sspan>
      </Sul>
    </Sheader>
  )
}

export default withRouter(Header)
