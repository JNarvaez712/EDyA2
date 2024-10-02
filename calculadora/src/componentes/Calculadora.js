import React from 'react';
import Display from './Display';
import Botones from './Botones';
import useCalculadora from '../hooks/useCalculadora';

const Calculadora = () => {
    const {input, resultado, handleButtonClick} = useCalculadora();

    return (
        <div className='calculadora'>
            <Display input={input} resultado={resultado}/>
            <div className='botones'>
                <div className='fila.superior'>
                    {['←', 'C'].map((botones) => (
                        <Botones key={botones} value={botones} onClick={()=>handleButtonClick(botones)}/>
                    ))}
                </div>
                <div className='fila-inferior'>
                {['7', '8', '9', '÷', '4', '5', '6', 'x', '1', '2', '3', '-', '0', '.', '=', '+'].map((botones) => (
                    <Botones key={botones} value={botones} onClick={()=>handleButtonClick(botones)}/>
                ))}
                </div> 
            </div>
        </div>
    )
}
export default Calculadora