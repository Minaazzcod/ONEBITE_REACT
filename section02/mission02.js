// Quiz 1. 영화 리뷰 정보 출력하기 (feat. 오펜하이머)

function printMovieReview({title, releaseYear, reviewers}) {
	console.log(`제목: ${title}`);
	console.log(`개봉: ${releaseYear}`);
	// reviewers배열 내에 첫번째 요소를 reviewer01 변수로 할당 = 을 이용해서 값이 없을 경우 "리뷰어 미정" 을 기본값으로 설정
	const [reviewer01 = "리뷰어 미정"] = reviewers;
	console.log(`첫 번째 리뷰어: ${reviewer01}`);
}
  
printMovieReview({
	title: "오펜하이머",
	releaseYear: 2023,
	reviewers: ["이정환", "김효빈", "김고은"],
});
  
printMovieReview({
	title: "웡카",
	releaseYear: 2024,
	reviewers: [],
});

// Quiz 2. 평균 성적 출력하기

function printAvgScore(students) {

	// for in 을 통한 students 객체 순회
	for (let name in students) {
		let sum = 0;
		// {scores} = scores 배열 추출 
		const {scores} = students[name];

		// for of를 통한 scores 배열 순회
		for (let score of scores) {
			// sum = sum + score
			sum += score;
		}

		const avgScore = sum / scores.length;
		console.log(`${name}:${avgScore}`);
	}
}
  
printAvgScore({
	이정환: { hobby: "테니스", scores: [10, 20, 30, 40, 50] },
	김효빈: { hobby: "테니스", scores: [90, 80, 30, 70, 50] },
	홍길동: { hobby: "의적", scores: [100, 100, 20, 20, 50] },
});
