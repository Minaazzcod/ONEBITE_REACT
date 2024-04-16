// 1. 배열의 구조 분해 할당
let arr = [1,2,3];

let [one, two, three, four = 4] = arr;

// 2. 객체의 구조 분해 할당
let person = {
	name : "김미나",
	age : 27,
	hobby : "수영",
};
// 객체의 구조 분해 할당은 중괄호를 활용
let {
	name, 
	age : myAge, 
	hobby,
	extra = "hello"
} = person;

console.log(name, myAge, hobby, extra)

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({name, age, hobby, extra}) => {
	console.log(name, age, hobby, extra);
}
// 객체를 넘겼을 때만 사용 할 수 있음
func(person);