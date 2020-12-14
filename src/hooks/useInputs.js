import {useState, useCallback} from 'react';

function useInputs(initialForm){
    const [from, setFrom] = useState(initialForm);
    const onChage = useCallback( e =>{
        const {name, value} = e.target;
        setFrom(from =>({...from, [name]:value}));
    });
    const reset = useCallback(() => setFrom(initialForm), [initialForm]);
    return [from, onChage, reset];
}

export default useInputs;
/*
import {useReducer, useCallback} from 'react';

function reducer(state, action){
    switch(action.type){
        case 'CHANGE_INPUT':
            return {
                ...state,
                [action.name] : action.value
            }
        case 'RESET_INPUT':
            return action.initialFrom;
    }
}
function useInputs(initialFrom){
    const [state, dispatch] = useReducer(reducer, initialFrom);
    const onChage = useCallback((e) =>{
        dispatch({
            type:'CHAGNE_INPUT',
            name :e.name,
            value: e.value
        })
    });
    const onReset = useCallback(()=>{
        dispatch({initialFrom});
    });
    return [state, onChage, onReset];
}
export default useInputs;
*/