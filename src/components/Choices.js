import { set } from 'mongoose'
import React, {useState, useEffect} from 'react'
import Shuffle from '../utils/Shuffle'

function Choices(props) {
    
    const { rightAns, wrongAns, getNewChoices } = props

    const [isCorrect, setIsCorrect] = useState(false)
    const [choices, setChoices] = useState(Shuffle(wrongAns.concat(rightAns)))
    const [visibility, setVisibility] = useState(false)


    useEffect(() => {
        setChoices(Shuffle(wrongAns.concat(rightAns)))
        
    }, [rightAns])

    function checkAns(id) {
        if (id === rightAns.id) {
            // setIsCorrect(true)
             
            // setIsCorrect(false)
            getNewChoices()
            //setChoices(Shuffle(wrongAns.concat(rightAns)))
            
        }
        // setVisibility(true)
        // setVisibility(false)
       
        
    }

    let resultStyle = {
                'visibility': visibility ? 'visible' : 'hidden'
            }

    return (
        <section className='choices'>
            <div
                className={'result'.concat((isCorrect) ? ' right' : ' wrong')}
                style={resultStyle}>{isCorrect ? 'CORRECT!' : 'Wrong! Try Again.'}
            </div>
            <div className='letters'>
                {choices.map(item => {
                    return (<button
                        className={'choice'}
                        value={item.value}
                        key={item.id}
                        onClick={()=>checkAns(item.id)}
                        id={item.id}>
                        {(item.value).toUpperCase()}
                    </button>)
                })}
            </div>
            </section>
    )
}

export default Choices