/*
 * 드모르간의 법칙 => 집합 배울때 나오는 이론
 * */

const isValidUser = true; // 서버에서 받은 값
const isValidToken = true; // 서버에서 받은 값

if (isValidToken && isValidUser) {
  console.log("로그인 성공");
}

if (!(isValidToken && isValidUser)) {
  console.log("로그인 실패");
}

// => 위의 조건에 드모르간 법칙을 씌우면

if (!isValidToken || !isValidUser) {
  console.log("로그인 실패");
}

/*
 * 가독성 면에서 이게 더 가독성이 높다. 그리고 유지보수에도 좋다 */
