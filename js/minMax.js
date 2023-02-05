// *** 경계 다루기 (min - max)

// 난수 생성 함수
function genRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 가장 좋은 방법으로 이렇게 상수로 미리 정해 놓는다.
const MIN_NUMBER = 1;
const MAX_NUMBER = 45;

// 가독성이 놓은 코드로 인식하기 쉽다.
console.log(genRandomNumber(MIN_NUMBER, MAX_NUMBER));

/*
 * min max 에서 제일 애매한 부분이 최대 최소를 포함시키냐 시키지 않냐이다.*/
const MAX_AGE = 20;
function isAdult(age) {
  // 최소값, 최대값 (포함되는지 vs 안되는지)
  // 이상, 초과 vs 이하, 미만
  // 이를 가독성 높게 읽히게 하기 위해 상수 이름에 _LIMIT 를 suffix 로 붙일 때도 있다.
  if (age >= MAX_AGE) {
  }
}

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
/*
 * airbnb 로 예를 들어보면, 예약을 진행할때 시작날짜와 끝나는 날짜가 정해져야 하고 이는 항상 포함 되어야한다.
 * 아래와 같은 함수를 만들면 가독성이 높아져서 바로 각 날짜가 포함된다는걸 알 수 있다.
 * begin 과 end 는 이럴때 많이 사용되는 단어니니 사용을 지향하자*/
function reservationDate(beginDate, endDate) {
  // ... some code
}

reservationDate("YYYY-MM-DD", "YYYY-MM-DD");

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
/*
 * first - last
 * 포함된 양 끝을 의미한다.
 * ~~부터 ~~까지*/

const students = ["존", "박", "제이슨"];

// 네이밍으로 first 와 last 는 아주 직관적이지 활용하는걸 지향하자!!
function getStudents(first, last) {
  // ... some code
}

getStudents("존", "제이슨");
