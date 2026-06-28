function Button({textBtn, onClick, btnStyle, onMouseEnter, onMouseLeave}) {
    return (
        <button style={btnStyle} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >{textBtn}</button>
    );
}

export default Button;