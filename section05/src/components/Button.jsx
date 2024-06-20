const Button = ({text,color,children}) => {

	// 이벤트 객체
	const onClickButton = (e) => {
		console.log(e)
		console.log(text)
	}

	return (
		<button
		// 아래 onClick이 이벤트 핸들러
		// 함수의 이름만 설정해야함 () 괄호 빼고!
		onClick={onClickButton}
		// onMouseEnter={onClickButton}
		style={{color:color}}>
			{text} - {color.toUpperCase()} - {children}
		</button>
	);
}

Button.defaultProps = {
	color: "black"
}

export default Button;