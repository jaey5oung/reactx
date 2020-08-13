import React, { useState } from "react"
import axios from "axios"

function DashBoard(props) {
  const [Goods, setGoods] = useState("")
  const [Price, setPrice] = useState("")
  const [Explan, setExplan] = useState("")

  const onGoods = (e) => {
    setGoods(e.target.value)
  }
  const onPrice = (e) => {
    setPrice(e.target.value)
  }

  const onExplan = (e) => {
    setExplan(e.target.value)
  }

  const onClickHandler = () => {
    alert("완료")
    console.log(Goods)
    console.log(Price)
    console.log(Explan)

    let body = {
      goods: Goods,
      price: Price,
      explan: Explan,
    }

    axios.post("/api/dashboard", body).then((response) => {
      if (response.data.success) {
        console.log(response.data)
        props.history.push("/goodshistory")
      } else {
        console.log("실패")
      }
    })
  }

  return (
    <div>
      <br />
      상품명
      <br />
      <input type="text" onChange={onGoods} />
      <br />
      가격
      <br />
      <input type="text" onChange={onPrice} />
      <br />
      <br />
      설명
      <br />
      <textarea type="text" onChange={onExplan} />
      <br />
      <button onClick={onClickHandler}>등록</button>
    </div>
  )
}

export default DashBoard
