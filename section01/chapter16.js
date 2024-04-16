// 1. 상수 객체
// -> 상수 프로퍼티도 추가, 수정, 삭제가 가능하다.
// -> 단, 아예 새로운 값을 할당하는건 불가하다.
const animal = {
	type : "고양이",
	name : "나비",
	color : "cheese"
};

animal.age = 2; // 추가
animal.name = "까망이"; // 수정
delete animal.color; //삭제

// 2. 메서드
// -> 값이 함수인 프로퍼티를 의미
 
const person = {
	name: "김미나",
	// 메서드
	// -> 객체의 동작을 정의할 때 주로 사용
	sayHi() {
		console.log("안녕!")
	},
}

person.sayHi();