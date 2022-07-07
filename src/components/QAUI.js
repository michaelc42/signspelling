//User inteface for question and answers
//pass question and answer set

import React from 'react'

const QAUI = (props) => {
    const { question, answers } = props
    
    return (
        <div>
            <div>
                {question}

            </div>
            <div>
                {answers}
            </div>
        </div>
    )
}

export default QAUI
