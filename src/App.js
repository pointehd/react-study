import React, {useRef, useReducer, useMemo, useCallback} from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Countrer';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users){
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}
const initialState = {
  inputs: {
    userName :'',
    email : ''
  },
  users : [
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
  ]
};

function reducer(state, action){
  switch(action.type){
    case 'CHANGE_INPUT':
      return {
        ...state,
        inputs : {
          ...state.inputs,
          [action.name] : action.value
        }
      };

    case 'CREATE_USER':
      // user : state.users.concat(action.user);
      // equals
      // user : [...state.users, users];
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user)
      };
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.id ? { ...user, active: !user.active } : user
        )
      };
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;
  const { userName, email } = state.inputs;
  const nextId = useRef(4);
  const onChange = useCallback(
    e => {
      const {name, value} = e.target;
      dispatch({
        type:'CHANGE_INPUT',
        name,
        value
      });
    },[]
  );
  const onCreate = useCallback(() => {
    dispatch({
      type:'CREATE_USER',
      user:{
        id: nextId.current,
        username : userName,
        email
      }
    });
    nextId.current +=1;
  },[userName, email]);
  const onToggle = useCallback(id => {
    dispatch({
      type: 'TOGGLE_USER',
      id
    });
  }, []);

  const onRemove = useCallback(id => {
    dispatch({
      type: 'REMOVE_USER',
      id
    });
  }, []);
  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <>
      <CreateUser 
        userName={userName}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onToggle={onToggle} onRemove={onRemove}/>
      <div>활성 사용자 수 : {count}</div>
      {/**
       * 
      <InputSample/>
      <Counter/>
      <Hello name="hello react" color="red"/>
      <Hello name="hello react" color="red" isSpecial/>
       */}
      {/** 
       * isSpecial={ture}  isSpecial 과 같음  
       * 신기하넹..
      */}
    </>
  );
}

export default App;
