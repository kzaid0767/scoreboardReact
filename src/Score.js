import React, { useState } from 'react'
import Button from './Button'

function Score(props) {

    const [score, setScore] = useState(0)

    function handleAdd(num) {
        setScore(score+num)
    }

    const handleSubtract=(num) =>{
        if(score>0){
            setScore(score-num)
        }
    }

    return (
        <div className='team-score'>
            <h1>{props.team}</h1>
            <div className='score-holder'>{score}</div>
            <Button number={1} sign={'+'} click={handleAdd} />
            <Button number={2} sign={'+'} click={handleAdd}/>
            <Button number={3} sign={'+'} click={handleAdd}/>
            <Button number={1} sign={'-'} click={handleSubtract}/>
        </div>
    )
}

export default Score

