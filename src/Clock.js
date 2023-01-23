import React,{useState} from 'react'
import Button from './Button'

function Clock() {

    const [time, setTime] = useState(5)

    const handleChange = (e) => {
        setTime(e.target.value)
    }


  return (
    <div>
        <input type={'number'} format={'mm:ss'} onChange={handleChange} value={time} />
        <div>
            <Button number={'start'} />
            <Button number={'stop'} />
            <Button number={'reset'} />
        </div>
    </div>
  )
}

export default Clock