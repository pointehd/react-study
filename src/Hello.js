import react from 'react';
import './App.css'

function Hello(){
    const name = 'test';
    const style = {
        backgroundColor : 'black',
        color: 'white'
    };
    return (
        <>
            <div>hellow react</div>
            <div className='class-test' style={style}>{name}</div>

            {/*javascript 주석 */}
        </>
    );
}

export default Hello;