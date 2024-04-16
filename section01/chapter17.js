// 1. 배열 생성
let arrA = new Array(); // 배열 생성자
let arrB = []; // 배열 리터럴 ( 대부분 사용 )

// 어떤 타입이든 들어갈 수 있고 개수의 제한이 없음
let arrC = [1,2,3];


// 2. 배열 요소 접근
// -> 인덱스를 이용
let item1 = arrC[0];
let item2 = arrC[1];

arrC[1] = "hello";

console.log(item2); 
console.log(arrC);