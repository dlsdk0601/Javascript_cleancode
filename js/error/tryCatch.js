/*
 * try ~ catch
 * => 예외 처리
 * 개발자가 모든 에러를 예측하기는 어렵다.
 * 그래서 try catch 를 사용한다.
 * */

function uttils() {
  return true;
}

function handleSubmit(input) {
  // 조금은 덜 중요한 코드
  try {
    // 예외가 예상되는 코드 혹은 발생시킬 코드
    // 여기 안에 try ~ catch 를 또 넣는 경우가 있는데, 이는 안좋음 => 함수단위로 try ~ catch 를 사용하
    utils(); // => 이 함수 안에는 try ~ catch 를 사용하지 않지만 여기에서 try 안에 감싸져있어서 안전하게 사용 가능
  } catch (e) {
    // 예외를 처리하는 코드
    console.error(e); // => 이렇게만 하고 넘어가는 경우가 있는데 그러면 안됨
    // console 만 놔두면 에러를 방치하는거다.
    /*
     * 개발자를 위한 예외처리
     * 사용자를 위한 예외처리
     * 사용자에세 사용을 제안
     * 에러 로그
     * 위와 같은 처리가 들어가야 한다.
     * */

    // 개발자를 위한 예외처리 => 동료 개발자에세 제안을 ~~~ TDZ
    console.warn(e);
    console.error(e);

    // 사용자를 위한 예외처리 => 사용자가 볼 수 있다고 생각
    alert(e.message); // modal or toast
    alert("404, not found"); // X
    alert("데이터 조회 실패"); // O

    // 사용자에세 사용을 제안
    history.back();
    history.go("안전한 어느 곳");
    clear(); // data 초기화
    element.focus(); // 어딘가로 이동 시켜서 다시 한번 사용자에게 알려주기

    // 에러 로그 수집
    sentry.전송(); // sentry => 에러가 발생했을때 에러를 수집하는 서드 파티

    // 필요에 따라 사용되는 경우 => 비추
    handleSubmit(); //
  } finally {
    // 로직이 끝나면 무조건 실행되는 코드
    // 데이터를 분석을 위한 로그
  }
}
