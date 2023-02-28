/*
 * 명시적인 연산자 사용 지양하기
 * 예측 가능하고 디버깅하기 쉽게
 * 연산자 우선 순위는 괄호를 사용한다
 * */

let number;

function decreament(number) {
  number--;
  // 꼭 감소 연사자만이 좋은건 아니다
  // number = number - 1 처럼 가독성을 높이며 명시적으로 해주는게 좋다
}

function increment(number) {
  number++;
}

// 몸무게 / (신장 * 신장) 과 같이 괄호를 사용하여 가독성을 높이자
// if((isLogin && token) || user)
