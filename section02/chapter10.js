// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 생성자
let date2 = new Date(1997,1,9,23,45,40);

// 2. 타임 스태프
// UTC 타임 기준
// 특정 시간이 "1970.01.01 00시 00분 00초"로 부터 몇 ms가 지났는지를 의미하는 숫자값
let ts1 = date1.getTime();
let date4 = new Date(ts1);

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
// js에서의 month는 0월부터 시작해서 +1 해줘야함
let month = date1.getMonth() + 1;
let date = date1.getDate();
let hour = date1.getHours();
let minutes = date1.getMinutes();
let seconds = date1.getSeconds();

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(5);
date1.setDate(15);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString());
console.log(date1.toLocaleString());