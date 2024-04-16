// 1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환 하는것

let num = 100;
let str = "200";

const result = num + str;
// -> num이 묵시적으로 100이 string 타입으로 형 변환 "100" + "200"

// 2. 명시적 형 변환
// -> 프로그래머 내장함수 등을 이용해서 직접 형 변환을 명시
// -> 내장함수는 기본적으로 자바스크립트 엔진이 제공하는 함수 (ex. Number)

let str1 = "10";
let strToNum1 = Number(str1);

let str2 = "10개";
// 숫자 외에 형태를 포함하고 있는 경우 parseInt, 단 문자가 뒤에 위치해있어야함
let strToNum2 = parseInt(str2);

// 숫자 -> 문자형으로 변경
let num1 = 20;
let numToStr1 = String(num1);