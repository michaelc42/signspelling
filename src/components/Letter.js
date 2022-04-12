import React from 'react'

function Letter(props) {
    const { value, id, image } = props
    return (
        <div className='letter'>
            <img src={image} value={value} key={id} id={id} />
        </div>
    )
}

export default Letter