import React, { useState } from 'react';
//import Button from './Button'; не знаю, в чем проблема, из-за которой все ломается, если использовать Button вместо input
import '../styles/buttonStyles.css';
import '../styles/resultStyles.css'

const ButtonPanel = () => {
    const [value, setValue] = useState('');
    
    const handleClick = (e) => {
        setValue(value + e.target.value);
    }

    const calculate = () => {    
        setValue(eval(value));
    }

    const clear = () => {
        setValue('');
    }

    return (
        <div>
            <input className='result' type='text' value={value} readOnly></input>
            <div>
                <input className='span-one' type='button' value='1' onClick={handleClick}></input>
                <input className='span-one' type='button' value='2' onClick={handleClick}></input>
                <input className='span-one' type='button' value='3' onClick={handleClick}></input>
                <input className='span-one' type='button' value='/' onClick={handleClick}></input>
                <input className='span-two-height' type='button' value='C' onClick={clear}></input>
            </div>
            <div>
                <input className='span-one' type='button' value='4' onClick={handleClick}></input>
                <input className='span-one' type='button' value='5' onClick={handleClick}></input>
                <input className='span-one' type='button' value='6' onClick={handleClick}></input>
                <input className='span-one' type='button' value='*' onClick={handleClick}></input>
              </div>  
            <div>
                <input className='span-one' type='button' value='7' onClick={handleClick}></input>
                <input className='span-one' type='button' value='8' onClick={handleClick}></input>
                <input className='span-one' type='button' value='9' onClick={handleClick}></input>
                <input className='span-one' type='button' value='+' onClick={handleClick}></input>
                <input  className='span-two-height' type='button' value='=' onClick={calculate}></input>
            </div>
            <div>
                <input className='span-two-width' type='button' value='0' onClick={handleClick}></input>
                <input className='span-one' type='button' value='.' onClick={handleClick}></input>
                <input className='span-one' type='button' value='-' onClick={handleClick}></input>
            </div>
        </div>
    )
}

export default ButtonPanel;