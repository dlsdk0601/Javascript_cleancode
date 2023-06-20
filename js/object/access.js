/*
 * 직접 접근 지양하기
 * redux 만 사용하더라도 state 하나만 바꾸려면 굉장히 많은 단계를 거쳐야한다.
 * => 예측 가능한 코드를 작성해야 한다.
 * */

const model = {
  isLogin: false,
  isValidToken: false,
};

// 따로 함수라 메서드로 정의한다.
function setLogin(bool) {
  model.isLogin = bool;
}

function setValidToken(bool) {
  model.isValidToken = bool;
}

function login() {
  // => model 에 너무 쉽게 접근한다.
  setLogin(true);
  setValidToken(true);
}

function logOut() {
  setLogin(false);
  setValidToken(false);
}

someElement.addEventListener("click", login);
