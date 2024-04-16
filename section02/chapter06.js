// 1. 배열 순회
let arr = [1,2,3];

// 1.1 배열 인덱스
// length : 모든 배열의 기본적인 프로퍼티로 길이를 의미
for(let i=0; i<arr.length; i++) {
	// console.log(arr[i]);
}

let arr2 = [4,5,6,7,8];
for(let i=0; i<arr2.length; i++) {
	// console.log(arr2[i]);
}

// 1.2 for of 반복문 
// 인덱스를 저장하지 않고 배열 내의 값을 순회
for(let item of arr) {
	console.log(item)
}

// 2. 객체 순회
let person = {
	name : "KimMina",
	age: 27,
	hobby : "Swimming"
}

// 2.1 Object.keys 사용
// -> 객체에서 key값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);

for (let i=0; i<keys.length; i++) {
	// console.log(keys[i])
}

for (let key of keys) {
	const value = person[key];
	// console.log(key, value);
}

// 2.2 Object.values
// -> 객체에서 value 값들만 뽑아서 새로운 배열러 반환
let values = Object.values(person);
for (let value of values) {
	console.log(value);
}

// 2.3 for in
// -> 객체만을 위해 존재하는 특수한 반복문
for(let key in person) {
	const value = person[key];
	console.log(key, value)
}

// ** for in : 객체에만 사용 가능 
// ** for of : 배열에만 사용 가능