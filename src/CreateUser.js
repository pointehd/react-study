import React, {useRef, useEffect} from 'react';

function CreateUser({userName, email, onChange, onCreate}) {
    const userInput = useRef();
    useEffect(()=>{
        // 원하던게 아님. ㅠㅠ
        // userInput.current.focus();
    });
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

export default CreateUser;