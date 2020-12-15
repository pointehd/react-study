import React, {useRef, useEffect, useContext} from 'react';
import useInputs from './hooks/useInputs';
import { UseDispatch } from './App';


function CreateUser() {
    const [{userName, email}, onChange, onReset] = useInputs({
        userName:'',
        email:''
    });
    const nextId = useRef(4);
    const dispatch = useContext(UseDispatch);
    const onCreate = () =>{
        dispatch({
            type:'CREATE_USER',
            user:{
                id: nextId.current,
                username : userName,
                email
            }
        });
        onReset();
        nextId.current += 1;
    }
    const userInput = useRef();
    const emailEnter = (e) =>{
        if(e.charCode ===13){
            onCreate();
            userInput.current.focus();
        }
    }
    return (
        <div>
            <input
                name="userName"
                placeholder="황동현"
                onChange={onChange}
                value={userName}
                ref={userInput}
            />
            <input
                name="email"
                placeholder="pointehd@gamil.com"
                onChange={onChange}
                value={email}
                onKeyPress={emailEnter}
                
            />
            <button onClick={onCreate}>등록</button>
        </div>
    );
}

export default React.memo(CreateUser);