// 5가지 요소 순회 및 탐색 메서드

// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1,2,3];

arr1.forEach(function(item, idx, arr){
	// console.log(item, idx, arr);
});

let doubleArr = [];
arr1.forEach((item) => {
	doubleArr.push(item*2);
});

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1,2,3];
let isInclude = arr2.includes(3);

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
// 배열의 가장 앞순서부터 탐색하기 때문에 동일 값의 경우 먼저 찾은 인덱스 반환
let arr3 = [1,2,3];
let index = arr3.indexOf(2);

let objectArr = [
	{name:"김미나"},
	{name:"김아무개"},
]
objectArr.findIndex((item)=>item.name==="김미나")

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 메서드
// 특정 요소의 인덱스(위치)를 반환하는 메서드
// 객체 타입의 값을 찾을 땐 indexOf가 아닌 findIndex 사용
let arr4 = [1,2,3];
const findedIndex = arr4.findIndex((item)=>item%2!==0);

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾으며 요소를 그대로 반환
let arr5 = [
	{name:"김미나"},
	{name:"박아무개"},
];

const finded = arr5.find((item)=>item.name==="김미나");