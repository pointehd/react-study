import React, {useReducer} from 'react';

function reducer(state, action){
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default :
            return state;
    }
}

function Counter(){
    /** 배열 비구조화 할당 */
    const [number, dispatch] = useReducer(reducer, 0);
    /**
     * 원래 해야하는 방식
     *  const numberState = useState(0);
        const number = numberState[0];
        const setNumber = numberState[1];
     * 
     */
    const onIncrease = () =>{
        dispatch({type:'INCREMENT'});
        // setNumber(number+1);
        console.log("+1");
    }

    const onDecrease = () =>{
        dispatch({type:'DECREMENT'});
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
export default React.memo(Counter);
