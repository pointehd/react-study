import React, {useRef} from 'react';

function CreateUser({userName, email, onChange, onCreate}) {
    const userInput = useRef();
    const emailEnter = (e) =>{
        if(e.charCode==13){
            onCreate();
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