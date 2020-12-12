import React, {useRef, useState} from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Countrer';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
  const [inputs, setInputs] = useState({
    userName : '',
    email : ''
  });

  const {userName, email} = inputs;
  const onChange = e =>{
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name] : value
    });
  };
  const [users, setUsers] = useState([
    {
      id:1,
      username:'donghyun',
      email:'donghyun@gmail.com',
      active: true
    },
    {
        id:2,
        username:'velopert',
        email:'velopert@gmail.com',
        active: false
    },
    {
        id:3,
        username:'test',
        email:'test@gmail.com',
        active: false
    }
  ]);
  const nextId = useRef(4);
  const onRemove = id =>{
    setUsers(users.filter(user =>user.id !== id));
  };
  const onCreate = () =>{
    const user = {
      id:nextId.current,
      username : userName,
      email
    }
    // spread 연산자 
    setUsers([...users, user]);
    /**
     * 둘중 하나사용
     * setUser(user.concat(user));
     * 
     */

    setInputs({
      userName:'',
      email:''
    });
    nextId.current += 1;
  };
  const onToggle = (id) =>{
    setUsers(
      users.map(user =>
          user.id === id ? {...user, active:!user.active} : user
        )
    );
  };
  return (
    <Wrapper>
      <CreateUser 
        userName={userName}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
      <InputSample/>
      <Counter/>
      <Hello name="hello react" color="red"/>
      <Hello name="hello react" color="red" isSpecial/>
      {/** 
       * isSpecial={ture}  isSpecial 과 같음  
       * 신기하넹..
      */}
    </Wrapper>
  );
}

export default App;
