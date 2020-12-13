import React from 'react';
import './App.css'
import Hello2 from './Hello2';

function Hello(props){
    const name = 'test';
    const style = {
        backgroundColor : 'black',
        color: 'white'
    };
    return (
        <>
            {props.isSpecial ? <div>*************<br/></div> : null}
            {/**JSX 에서 null, false, undefined 를 렌더링하게 된다면 아무것도 나타나지 않게 됩니다. */}
            {props.isSpecial && <div>*************<br/></div>}
            {/** && 를 사용하면 뒤에 있는것만 출력됨 true 일 때 */}
            <div>properties</div>
            <div style={{color:props.color}}>{props.name}</div>
            <div>hellow react</div>
            <div className='class-test' style={style}>{name}</div>
            <Hello2 test="testtestestest" color="blue" fontSize='50px'/>
            {/*javascript 주석 */}
        </>
    );
}

export default React.memo(Hello);