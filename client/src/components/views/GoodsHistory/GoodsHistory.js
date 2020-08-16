import React, { useEffect, useState } from "react"
import axios from "axios"

function GoodsHistory() {
  const [food, setFood] = useState([])
  const [foodPrice, setFoodPrice] = useState([])
  const foodfood = []
  let foodfoodfood = []

  useEffect(() => {
    fetchPage()
  }, [])

  //2번
  //변수에 .을 넣지않는다 그래서 넘겨올땐 새로운 변수의 이름을 정해준다 그때 넘겨올때 이름을 정할땐 넘겨주는거랑 이름을 마춰 그것을
  //넘겨준다는 다른사람이 생각할수있게끔해준다
  const onDelete = (goodsData) => {
    let body = {
      name: goodsData,
    }
    alert("삭제완료")
    axios.post("/api/delete", body).then((response) => {
      if (response.data.success) {
        console.log("삭제성공")
        fetchPage()
      } else {
        console.log("실패")
      }
    })
  }

  const onAllDelete = () => {
    alert("전제삭제완료")
    axios.post("/api/alldelete").then((response) => {
      if (response.data.success) {
        console.log("전체삭제성공")
        fetchPage()
      } else {
        console.log("실패")
      }
    })
  }

  //0번
  const fetchPage = () => {
    axios.post("/api/goodshistory").then((response) => {
      if (response.data.success) {
        response.data.ojy.forEach((item) => {
          foodfood.push(item)
        })
        foodfoodfood = response.data.ojy.filter((items) => {
          return items.price > 20000
        })

        setFood(foodfood)
        setFoodPrice(foodfoodfood)
      } else {
        console.log("실패")
      }
    })
  }

  return (
    //1번
    <div>
      <ul>
        {food.map((a, index) => (
          <li key={index}>
            {a.price}
            {a.goods}
            <button onClick={() => onDelete(a.goods)}>삭제</button>
            <button>상품수정</button>
          </li>
        ))}
      </ul>
      {foodPrice.map((element, index) => (
        <div key={index}>{element.goods}</div>
      ))}

      <button onClick={onAllDelete}>전체삭제</button>
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

//일단 딜리트 한번더 해보고, 업데이트는 수정눌렀을때 그 상품만 페이지로 넘길수있게
//화요일까지
