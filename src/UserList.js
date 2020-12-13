import React, {useEffect} from 'react';

const User = React.memo(function User({user, onRemove, onToggle}){
    /***
     * mount 시에 하는 작업
     *  props 로 받은 값을 컴포넌트의 로컬 상태로 설정
        외부 API 요청 (REST API 등)
        라이브러리 사용 (D3, Video.js 등...)
        setInterval 을 통한 반복작업 혹은 setTimeout 을 통한 작업 예약
        
        unmount시 하는 작업
            setInterval, setTimeout 을 사용하여 등록한 작업들 clear 하기 (clearInterval, clearTimeout)
            라이브러리 인스턴스 제거
     * 
     */
    useEffect(()=>{
        // mount
        console.log('컴포넌트가 화면에 나타남');
        console.log(user);
        // unmount
        return () =>{
            console.log('컴포넌트가 화면에서 사라짐');
            console.log(user);
        }
    },[user]);

    return (
        <div>
            <b style={{
                cursor :'pointer',
                color: user.active ? 'green' : 'black'
            }}
                onClick={()=>onToggle(user.id)}
            >
                {user.username}
            </b>
            <span>({user.email})</span>
            <button onClick={()=>onRemove(user.id)}>삭제</button>
        </div>
    )
}
);
function UserList({users, onRemove, onToggle}){
    
    return (
        <div>
            {/**
             * map 을 이용하여 렌더링
             **/}
            {users.map(user =>(
                <User key={user.id}  user={user} onRemove={onRemove} onToggle={onToggle}/>
            ))}
        </div>
    )
}

export default React.memo(UserList);