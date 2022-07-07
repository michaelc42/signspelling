import { nanoid } from "nanoid"

const wordsArr = ['cat', 'dog', 'food', 'happy', 'monkey', 'book', 'run', 'walk', 'warm', 'cold', 'hot', 'puppy', 'kitten']

function getImages(word) {
    const imageArr = [...word].map(letter => {
        return process.env.PUBLIC_URL + `/images/${letter}.png`
    })

    return imageArr
}

export const Words = [...wordsArr].map((word) => {
    return {
        id: nanoid(),
        value: word,
        images: getImages(word)

    }
})

export function getWrongAnswers(answer, number = 3) {
    
    const ret = []
    let temp
    for (let i = 0; i < number; i++) {
      temp = wordsArr[Math.floor(Math.random() * wordsArr.length)]
      //get wrong answers and dont repeat
        if ((answer.value === temp) || ret.includes(temp) ) {
            console.log('i--')
            i--
        } else {
         ret.push(temp)
        }
        
    }
    
    //console.log(ret)
    return ret
}

export function getRandomWord() {
    return Words[Math.floor(Math.random()*Words.length)]
}