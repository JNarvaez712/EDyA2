import React from "react"
import { useCounter } from "./customHook/useCounter"

const FirstApp = () => {
    const {counter, increment, decrement , reset} = useCounter(0)

    return (
        <>
            <h1>Counter</h1>
            <span>{counter}</span>
            <div>
                <button onClick={()=>increment()}>+1 </button>
                <button onClick={()=> decrement()}>-1</button>
                <button onClick={()=> reset()}>Reset</button>
            </div>
        </>
    )
}
export default FirstApp