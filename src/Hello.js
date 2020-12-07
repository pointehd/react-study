import react from 'react';
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
            <div>properties</div>
            <div style={{color:props.color}}>{props.name}</div>
            <div>hellow react</div>
            <div className='class-test' style={style}>{name}</div>
            <Hello2 test="testtestestest" color="blue" fontSize='50px'/>
            {/*javascript 주석 */}
        </>
    );
}

export default Hello;