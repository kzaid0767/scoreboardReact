import React, { useState } from 'react'

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
        <div>
            <h1>{props.team}</h1>
            <div>{score}</div>
            <Button number={1} click={handleAdd} />
            <Button number={2} click={handleAdd}/>
            <Button number={3} click={handleAdd}/>
            <Button number={1} click={handleSubtract}/>
        </div>
    )
}

export default Score

const Button = ({number, click}) => {

    return (
        <button onClick={()=>click(number)}>{number}</button>
    )
}