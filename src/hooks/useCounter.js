import { useState } from "react"

const useCounter = ( initial=1 ) => {

  const [counter, setCounter] = useState(initial)

  const increment = () => {
    setCounter(counter+1)
  }

  const decrement = () => {
    setCounter(counter-1)
  }

  const reset = () => {
    setCounter(initial)
  }

  return { counter, increment, decrement, reset }
}

export default useCounter