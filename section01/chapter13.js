// 1. 콜백함수란?
function main(value) {
	// console.log(1);
	// console.log(2);
	value();
	console.log('end');
}

// function sub() {
// 	console.log('i am sub');
// }

// 어떠한 함수를 다른 함수의 인수로 전달해서 나중에 호출시키도록 알아서 설정한 함수를 콜백함수라고 함 
// 콜백 : 나중에 실행되는, 뒷전에 실행되는
main(() => {
	// console.log('i am sub');
});

// 2. 콜백함수의 활용
function repeat(count, callback) {
	for (let idx = 1; idx <= count; idx++) {
		callback(idx);
	}
}

repeat(5, (idx) => {
	console.log(idx);
});
repeat(5, (idx) => {
	console.log(idx*2);
});
repeat(5, (idx) => {
	console.log(idx*3);
});