import "./Main.css"

// JSX 주의사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
// ex) if, for 문은 사용 불가 (한줄로 값으로 표현이 불가하기 때문)
// 2. 숫자, 문자열, 배열 값만 정상적으로 렌더링 된다.
// ex) true, boolean 값 렌더링 X
// 3. 모든 태그는 닫혀있어야 한다
// ex) <img> 태그도 반드시 닫아줘야한다. or 셀프클로징 <img/> 해줄것
// 4. 최상위 태그는 반드시 하나여야만 한다
// ex) 하단 예시로 <main> 태그 형제 관계로 <div> 추가 시 오류 / 빈 태그는 가능


// 컴포넌트를 생성하는 함수의 처음은 반드시 "대문자"
const Main = () => {
	const user = {
		name: "KimMina",
		isLogin:true,
	};

	if(user.isLogin) {
		return <div className="logout">로그아웃</div>;
	} else {
		return <div>로그인</div>;
	}

	// return (
	// 	<>
	// 		{user.isLogin ? (
	// 			<div>로그아웃</div>
	// 		) : (
	// 			<div>로그인</div>
	// 		)}
	// 	</>
	// )
};
export default Main;