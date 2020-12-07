import react from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';

function App() {
  return (
    <Wrapper>
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
