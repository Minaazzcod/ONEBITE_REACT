function returnFalse() {
	console.log("False 함수");
	return undefined;
}

function returnTrue() {
	console.log("True 함수");
	return 10;
}

// 단락평가 작동 -> AND 연산자의 경우 첫번째 연산자로 결정 지을 수 있다면 다음 연산자는 계산하지 않음
// -> 아래 콘솔은 false && true 이기 때문에 true 함수 메시지를 호출하지 않음.
// console.log(returnFalse() && returnTrue());

// 단락 평가 활용 사례
function printName(person) {
	// if(!person) {
	// 	console.log("person의 값이 없음");
	// 	return;
	// }
	const name = person && person.name; 
	console.log(name || "person의 값이 없음");
}

printName({name:"김미나"});