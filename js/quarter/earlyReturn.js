/*
 * Early return pattern
 * */
const login = (isLogin, user) => {
  if (!isLogin) {
    if (!checkToken()) {
      if (!user.nickname) {
        return register(user);
      } else {
        refreshToken();

        return "로그인";
      }
    } else {
      throw new Error("No Token");
    }
  }
};

// 위의 함수는 가독성도 떨어지고 효율적이지 않은 코드임

const loginRefactor = (isLogin, user) => {
  /*
   * 함수를 미리 종료 시킨다.
   * 아래 처럼 단계별로 진행하고 중간에 걸러지면 함수를 종료 시킨다. */

  if (isLogin) {
    return;
  }

  if (!checkToken()) {
    throw new Error("No Token");
  }

  if (!user.nickname) {
    return register(user);
  }

  refreshToken();

  return "로그인";
};
