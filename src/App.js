import react from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Countrer';
import InputSample from './InputSample'
function App() {
  return (
    <Wrapper>
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
