import React, {useState} from 'react';

function Counter(){
    /** 배열 비구조화 할당 */
    const [number, setNumber] = useState(0);
    /**
     * 원래 해야하는 방식
     *  const numberState = useState(0);
        const number = numberState[0];
        const setNumber = numberState[1];
     * 
     */
    const onIncrease = () =>{
        setNumber(prevNumber => prevNumber + 1);
        // setNumber(number+1);
        console.log("+1");
    }

    const onDecrease = () =>{
        setNumber(prevNumber => prevNumber - 1);
        // setNumber(number-1);
        console.log("-1");
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onDecrease}>-1</button>
            <button onClick={onIncrease}>+1</button>
        </div>
    )
}
export default Counter;
