import React, {useState, useRef} from 'react';

function InputSample(){
    const [text, setText] = useState('');
    const [inputs, setInputs] = useState({
        name : '',
        nickname: ''
    });
    const nameInput = useRef();

    const {name, nickname} = inputs; // 비구조화 할당을 통해 값 추출
    
    const onChanges = (e) =>{
        const {value, name} = e.target;
        setInputs({
            ...inputs, // 기존 inputs 객체 복사
            [name] :value // name 키를 가진 값을 value 로 설정
        })
    }

    const onChange = (e) =>{
        setText(e.target.value);
    };

    const onResets = () =>{
        setInputs({
            name:'',
            nickname:''
        });
        nameInput.current.focus();
    }
    const onReset = () =>{
        setText('');
    }

    return (
        <div>
            <input onChange={onChange} value={text}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 : {text}</b>
            </div>
            <input ref={nameInput} name="name" onChange={onChanges} value={name} placeholder="이름"/>
            <input name="nickname" onChange={onChanges} value={nickname} placeholder="닉네임"/>
            <button onClick={onResets}>전체 초기화</button>
            <div>
                <b>값 : {name}, {nickname}</b>
            </div>
        </div>
    )
}

export default InputSample;