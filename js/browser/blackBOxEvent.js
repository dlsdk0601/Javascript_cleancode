/*
 * Black Box Event Listener
 * (강의자의 개인적인 사례 임)
 *
 * 추상화가 잘못된 사례를 블랙 박스라고 한다.
 * 내부 구현이 어떻게 동작될지 예측할 수 없는 경우
 * 추상화가 너무 과하게 되거나 명시적인 코드가 아닌 경우
 * */

const button = document.querySelector("button");

function getLog(e) {
  console.log(e);
}

// q버튼.이벤트_등록('이벤트 타입', 리스너 함수 실행) => 반응형으로 실행된다.
button.addEventListener("click", getLog);
// => log 를 가져 온다는걸 명시적으로 알 수 있다.
// onClick, handleClick 이라는 이름을 많이 사용하는데 명시적을 감이 오지 않는다.

button.addEventListener("click", () => {
  // some code
  /*
   * 여기에 굉장히 많은 코드가 있다면 알수가 없다.
   * */
});

// 이름으로는 무슨일을하는지 알수가 없다.
// 검색 상자에 들어가는 함수라면
const handleClick = (e) => {
  /*
   * 1. input 을 받는 코드
   * 2. 유효성 검사
   * 3. form 을 전송하는 코드
   * */
};

// 이름 잘 지을 것 => 아래에 코드는 누가 봐도 알수가 없다.
button.addEventListener("keyup", handleClick);
form.addEventListener("submit", handleClick);
