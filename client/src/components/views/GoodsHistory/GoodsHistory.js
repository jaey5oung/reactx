import React, { useEffect, useState } from 'react'
import axios from 'axios'

function GoodsHistory() {
  const [food, setFood] = useState([])
  const [foodPrice, setFoodPrice] = useState([])
  const foodfood = []
  let foodfoodfood = []

  useEffect(() => {
    axios.post('/api/goodshistory').then((response) => {
      if (response.data.success) {
        response.data.ojy.forEach((item) => {
          foodfood.push(item)
        })
        foodfoodfood = response.data.ojy.filter((items) => {
          return items.price > 10000
        })
        setFood(foodfood)
        setFoodPrice(foodfoodfood)
      } else {
        console.log('실패')
      }
    })
  }, [])
  console.log(food);
  

  return (
    <div>
      <ul>
  {food.map((a) => (<li>{a.price}{a.goods}</li>))}
      </ul>
      {foodPrice.map((element, index) => (<div key={index}>{element.goods}</div>))}
    </div>
  )
}

export default GoodsHistory

//map : 배열의 각 item 들에 대한 return 값을 갖는 새로운 item들의 배열을 return한다.
//arr.map(item=> return{<div>item.goods</div>})
//예를 보면 arr.map()을 통해 새로운 배열이 리턴되기 떄문에 newArr에 담는 과정이 필요하다

//forEach : 배열의 각 item들에 대한 어떠한 처리를 한다
//arr.forEach(item=>{console.log(item)})
//이렇게 했을시 arr.Each()를 통해 리턴되는 값은 없고 그냥 console.log(item)이 item의 수만큼 실행된다. 만약 arr배열이 4개의 원소를 갖고 있으면 4번의 console문이 실행된다