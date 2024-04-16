// 1. 함수 표현식

function funcA() {
	// console.log("funcA");
}

// funcA를 호출한게 아닌 단순 저장
// -> 호출을 했다면 funcA();
let varA = funcA;
varA();

// 아래문은 선언문이 아니기 때문에 단독으로 호출을 할 수 없다. 
// -> 익명함수
// -> 호이스팅의 대상이 되지 않는다.
let varB = function (){
	// console.log("funcB");
}

varB();

// 2. 화살표 함수
// -> 함수를 이전보다 빠르고 간결하게 생성한다.
let varC = (value) => {
	console.log(value);
	return value + 1
};

console.log(varC(10))
