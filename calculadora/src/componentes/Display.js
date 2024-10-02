import React from 'react';

const Display = ({input, resultado}) => {
    return (
        <div className='display'>
            <div className='input'>{input}</div>
            <div className='resultado'>{resultado}</div>
        </div>
    )
}
export default Display