// Quiz1. 책 정보 확인하기

const book = {
	title: "한 입 크기로 잘라먹는 리액트",
	author: "이정환",
	// publishedYear 속성은 이 객체에는 없습니다.
};

// 방법1
if("publishedYear" in book) {
	console.log(`출판년도는 ${book.publishedYear} 입니다.`)
} else {
	console.log("출판년도 정보가 없습니다.")
}

// 방법2
if(!book.publishedYear) {
	console.log("출판년도 정보가 없습니다.")
} else {
	console.log(`출판년도는 ${book.publishedYear} 입니다.`)
}

// 방법3
checkYear = () => {
	const publishedYearCheck = book && book.publishedYear;
	console.log(publishedYearCheck ? `출판년도는 ${book.publishedYear} 입니다.` : "출판년도 정보가 없습니다.");
}

checkYear();