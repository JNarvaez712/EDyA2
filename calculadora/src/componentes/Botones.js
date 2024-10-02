import React from 'react';

const Botones = ({value, onClick}) => {
    return (
        <button className='boton' onClick={onClick}>{value}</button>
    )
}
export default Botones