import React, { useEffect, useState } from 'react'
import Button from './Button'
/* import TimeInput from 'react-input-time' */

function Clock() {

    const [time, setTime] = useState(30)
    const [isTimeRuning, setIsTimeRunning] = useState(false)

    const handleChange = (e) => {
        setInterval(setTime(e.target.value),1000)
    }

    const start = () => {
        setIsTimeRunning(true)
    }

    const pause = () => {
        setIsTimeRunning(false)
    }

    const reset = () => {
        setIsTimeRunning(false)
        setTime(30)
    }

    useEffect(
        () => {
            const timer = () => {
                if (isTimeRuning && time>0) {
                    setTime((time - 0.1).toFixed(1))
                }
            }

            // if you want it to finish at some point
            if (time === 0) {
                return;
            }
            const id = setInterval(timer, 100)
            return () => clearInterval(id)
        },
        [time, isTimeRuning]
    )


    return (
        <div>
            <input type={'number'} disabled={isTimeRuning} onChange={handleChange} value={time} />
            <div>
                <Button number={'start'} click={start} />
                <Button number={'pause'} click={pause} />
                <Button number={'reset'} click={reset} />
            </div>
        </div>
    )
}

export default Clock