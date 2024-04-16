//  1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {} // 객체 리터럴 (대부분 사용)

// 2. 객체 프로퍼티 ( 객체 속성 )
// -> 개수의 제한은 없음
// -> name, age, hobby => key:value,
let person = {
	name : "김미나",
	age : 27,
	hobby : "수영",
	job : "Publisher",
	extra: {},
	10 : 20,
	// 띄어쓰기가 필요한 키값은 따옴표 필수
	"like cat" : true,
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 ( 점 표기법, 괄호 표기법 )
// 점 표기법
let name = person.name;
// 괄호 표기법
let age = person["age"];

let property = "hobby";
let hobby = person[property];

// 3.2 새로운 프로퍼티를 추가하는 방법
person["favoriteFood"] = "초밥";

// 3.3 프로퍼티를 수정하는 방법
person.job = "Publisher and Designer";
person["favoriteFood"] = "소고기";

// 3.4 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favoriteFood"];

// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in연산자)
let result1 = "name" in person;
let result2 = "cat" in person;