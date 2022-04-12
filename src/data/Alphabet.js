import { nanoid } from 'nanoid'
import Shuffle from '../utils/Shuffle'

const az = 'abcdefghijklmnopqrstuvwxyz'

export const Alphabet = [...az].map(letter => {
    return {
        id: nanoid(),
        value: letter,
        image: process.env.PUBLIC_URL + `/images/${letter}.png`
    
    }
})

export function randLetter() {
    return Alphabet[Math.floor(Math.random() * Alphabet.length)]
}

export function getWrongAnswers(answer, number = 3) {
    
    const ret = []
    let temp
    for (let i = 0; i < number; i++) {
      temp = Alphabet[Math.floor(Math.random() * Alphabet.length)]
      //get wrong answers and dont repeat
        if ((answer.value === temp.value) || (ret.filter(element => element.id === temp.id)).length>0 ) {
            console.log('i--')
            i--
        } else {
         ret.push(temp)
        }
        
    }
    
    //console.log(ret)
    return ret
}

export function getWrongAnswersScrambled(answer, number = 3) {
    return Shuffle(getWrongAnswers(answer, number=3).concat(answer))
}

    // {
    //     id: nanoid(),
    //     value: 'a',
    //     image: process.env.PUBLIC_URL + "/images/a.png"
    // }
