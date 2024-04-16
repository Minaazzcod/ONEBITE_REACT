// 함수선언
function greeting () {
	// console.log("안녕하세요?")
}

// 함수호출 (소괄호와 함께 호출 필수);
// 순차적으로 코드가 실행된다.
// console.log("호출 전")
// greeting();
// console.log("호출 후")

// 예제 - 직사각형의 넓이 구하기
// 여기서 width와 height는 매개변수
function getArea(width, height) {

	// 함수 안에 함수를 선언 할 수 있다. (->중첩함수)
	function another () {
		console.log('another')
	}

	another();

	let area = width * height;
	// console.log(area);
	// return문을 실행하고 함수는 바로 종료
	return area;
}

// return 값을 변수에 담을 수 있다.
let area1 = getArea(10, 20);
console.log(area1);

// Q. 호이스팅 기능이란? 
// A. 끌어올리다
// -> 선언문을 호출문보다 아래에 두어도 호이스팅이 되기 때문에 아무런 오류가 발생하지 않다. 함수 선언을 꼭 호출보다 먼저 할 필요가 없다.