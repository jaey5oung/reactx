import React, { useState } from "react"

function Zerocho() {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9))
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9))
  const [value, setValue] = useState("")
  const [result, setResult] = useState("")

  const onChangeHandler = (e) => {
    setValue(e.target.value)
  }
  const onSubmitHandler = (e) => {
    e.preventDefault()
    if (parseInt(value) === first * second) {
      setResult("정답" + value)
      setFirst(Math.ceil(Math.random() * 9))
      setSecond(Math.ceil(Math.random() * 9))
      setValue("")
    } else {
      setResult("응 아니야")
      setValue("")
    }
  }

  return (
    <div>
      <div>
        {first} x {second} = ?
      </div>
      <form onSubmit={onSubmitHandler}>
        <input value={value} onChange={onChangeHandler} />
        <button>입력</button>
      </form>
      {result}
    </div>
  )
}

export default Zerocho
