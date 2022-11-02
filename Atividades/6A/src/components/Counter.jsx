import { useState } from "react";

export function Counter(){
    //imutabilidade
    const [counter, setCounter] = useState(0)

 
    function increment() {
        setCounter(counter + 1)
    }

    return(
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>Incrementar</button>
        </div>
    )
}