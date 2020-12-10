import React from 'react';

function User({user}){
    return (
        <div>
            <b>{user.username}</b><span>({user.email})</span>
        </div>
    )
}

function UserList(){
    const users = [
        {
            id:1,
            username:'donghyun',
            email:'donghyun@gmail.com'
        },
        {
            id:2,
            username:'velopert',
            email:'velopert@gmail.com'
        },
        {
            id:3,
            username:'test',
            email:'test@gmail.com'
        }
    ];
    return (
        <div>
            {/**
             * map 을 이용하여 렌더링
             **/}
            {users.map(user =>(
                <User key={user.id}  user={user}/>
            ))}
        </div>
    )
}

export default UserList;