import React from 'react'

const Buttons = ({text, color}) => {
    return (
        <button className='btn' style={{backgroundColor:color}}>{text}</button>
    )
}

export default Buttons
