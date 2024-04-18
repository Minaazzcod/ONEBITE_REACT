import "./Main.css";

// JSX 주의사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다 (한줄의 코드가 특정한 값으로 표현되는 식 ex. if문, for문 등의 조건or반복문은 사용 불가)
// 2. 숫자, 문자열, 배열 값만 정상적으로 렌더링 가능 (객체는 렌더링 불가)
// 3. 모든 태그는 닫혀있어야 한다
// 4. 최상위 태그는 반드시 하나여야만 한다
// 여기서 최상위 태그는 <main></main> 감싸줄만한 태그가 없을 경우 <></> 빈태그 사용

const Main= () => {

	const user = {
		name:"김미나",
		isLogin: true,
	}

	if(user.isLogin) {
		return <div className="logout">로그아웃</div>
	} else {
		return <div>로그인</div>
	}

	// return <>
	// {user.isLogin? (
	// 	<div>로그아웃</div>
	// ) : (
	// 	<div>로그인</div>
	// )}
	// </>
}

export default Main