// Quiz1. 모든 약수 찾기
// 변수 num의 모든 약수를 다 찾아서 출력하세요.

let num = 100;

for (let idx = 1; idx <= num; idx++) {
	if (num % idx === 0) {
		// console.log(idx);
	}
}

// Quiz2. 소수 판별기
// 함수 isPrimeNumber는 한개의 매개변수 num을 제공받아 소수인지 판별합니다.
// num이 소수라면 true를, 아니라면 false를 반환합니다.

function isPrimeNumber(num) {
	for (let i = 2; i < num; i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
}
 
console.log(isPrimeNumber(1));
console.log(isPrimeNumber(4));
console.log(isPrimeNumber(11));
console.log(isPrimeNumber(12));

// Quiz3. 계산기 만들기
function add(num1, num2) {
	return num1 + num2;
}

function subtract(num1, num2) {
	return num1 - num2;
}

function calculate(num1, num2, operation) {
	const result = operation(num1, num2);
	console.log(result);
}

calculate(5, 3, add);
calculate(5, 3, subtract);