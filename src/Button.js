const Button = ({number, click, sign}) => {

    return (
        <button onClick={()=>click(number)}>{sign}{number}</button>
    )
}

export default Button