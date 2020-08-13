import React, { useEffect, useState } from "react"
import axios from "axios"

function GoodsHistory() {
  const [food, setFood] = useState([])
  const foodfood = []

  useEffect(() => {
    axios.post("/api/goodshistory").then((response) => {
      if (response.data.success) {
        response.data.ojy.map((item) => {
          foodfood.push(item.goods)
        })

        setFood(foodfood)
      } else {
        console.log("실패")
      }
    })
  }, [])

  return <div>{food}</div>
}

export default GoodsHistory
