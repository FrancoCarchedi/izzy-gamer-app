import { useState } from "react"

const useCounter = ( initial=1 ) => {

  const [counter, setCounter] = useState(initial)

  const increment = ( quantity ) => {
    setCounter(counter+quantity)
  }

  const decrement = ( quantity ) => {
    setCounter(counter-1)
  }

  const reset = () => {
    setCounter(initial)
  }

  return { counter, increment, decrement, reset }
}

export default useCounter