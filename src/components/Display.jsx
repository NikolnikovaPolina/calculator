import React from 'react';
import Calculator from './Calculator';
import '../styles/displayStyles.css';

const Display = (value) => {
    return (  
        <div className='container'>
            <Calculator/>
        </div>
    )
}

export default Display;