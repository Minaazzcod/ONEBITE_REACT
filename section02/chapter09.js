// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
	{name:"김미나", hobby: "수영"},
	{name:"박아무개", hobby: "수영"},
	{name:"이아무개", hobby: "테니스"},
];

const swimPeople = arr1.filter((item)=>{
	if (item.hobby ==="수영") return true
})

// 2. map
// 배열의 모든 요소를 순회하면서 각각 콜백함수를 실행하고 결과값들을 모아서 새로운 배열로 변환
// => 원본 배열의 값들을 변환한 새로운 배열 생성 가능
let arr2 = [1,2,3];
const mapResult1 = arr2.map((item, idx, arr)=>{
	return item*2;
});

let names = arr1.map((item) => item.name);

// 3. sort
// 배열을 사전순으로 정렬하는 메서드
// 숫자는 적용되지 않는다. ( 숫자 대소비교 X )
let arr3 = ["b", "a", "c"];
let arr4 = [10,5,78,8];
arr3.sort();
arr4.sort((a,b) =>{
	if(a>b) {
		// b가 a 앞에 와라
		return 1; // -> b, a 배치
	} else if ( a<b) {
		// a가 b 앞에 와라
		return -1; // -> a, b 배치
	} else {
		// 두 값의 자리를 바꾸지 마라
		return 0; // a,b 자리를 그대로 유지
	}
});

// 4. toSorted
// sort는 원본 배열 자체를 정렬하지만 toSorted 새로운 배열을 반환
let arr5 = ["c","a","b"];
const sorted = arr5.toSorted();

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr6 = ["hi", "i am", "MinaKim"];
const joined = arr6.join(' ');
console.log(joined)