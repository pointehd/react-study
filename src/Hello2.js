import React from 'react';

function Hello2({test, color, name,fontSize}){
    return (
        <>
            <div>다른방식 props 전달</div>
            {/** props 비구조화 할당 */}
            <div style={{color, fontSize}}>{test}</div>
            <br/>
            <br/>
            <div>{name}</div>
        </>
    );
}

Hello2.defaultProps = {
    name: 'namenamename'
}

export default React.memo(Hello2);