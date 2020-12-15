import React, {useRef, useReducer, useMemo, useCallback} from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Countrer';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';
import produce from 'immer';

import useInputs from './hooks/useInputs'

function countActiveUsers(users){
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}
const initialState = {
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
    case 'CREATE_USER':
      // user : state.users.concat(action.user);
      // equals
      // user : [...state.users, users];
      return produce(state, draft =>{
        draft.users.push(action.user);
      });
    case 'TOGGLE_USER':
      return produce(state, draft =>{
        const user = draft.users.find(user => user.id === action.id);
        user.active = !user.active;
      });
    case 'REMOVE_USER':
      return produce(state, draft =>{
        const index = draft.users.findIndex(user => user.id == action.id);
        draft.users.splice(index,1);
      });
    default:
      return state;
  }
}

export const UseDispatch = React.createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;
  

  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <UseDispatch.Provider value={dispatch}>
      <CreateUser 
      />
      <UserList users={users}/>
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
    </UseDispatch.Provider>
  );
}

export default App;
