let o1 = {name:"김미나"};
// 얕은 복사
let o2 = o1;
// 깊은 복사
let o3 = {...o1};

// 얕은 비교
// 참조값이 동일하게 가르키고 있음
console.log(o1 === o2);
// 깊은 복사로 인해 참조값이 상이함
console.log(o1 === o3);

// 깊은 비교
// JSON>stringfy 함수를 활용하여 비교
// -> 자바스크립트의 내장함수로 객체를 문자열로 변환하는 기능
console.log(
	JSON.stringify(o1) === JSON.stringify(o3)
);