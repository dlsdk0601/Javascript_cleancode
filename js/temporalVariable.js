const getElements = () => {
  const result = {}; // 임시 객체
  // 임시 변수는 스코프 안에서 전역변수처럼 활용되는 변수이다.
  // 함수가 잘게 쪼개져있다면 관리가 용이하지만, 함수가 커지면 전역 변수와 다름없는 사이즈가 되버린다.
  // 때문에 임시 변수 또한 지양할 필요가 있다.
  // *** 사람 심리상 이런 임시 변수를 만들면 해당 변수를 계속 조작 하고 싶어지고 그러면 위험도가 높아진다.

  result.title = document.querySelector(".title");
  result.text = document.querySelector(".text");
  result.value = document.querySelector(".value");

  const result1 = {
    title: document.querySelector(".title"),
    text: document.querySelector(".text"),
    value: document.querySelector(".value"),
  };
  // 위와 같이 임시 변수로 선언하지 말고 선언과 할당을 동시에 한다.

  // return result;

  // 아래 처럼 변수의 선언 조차 필요하지 않게 하는게 가독성을 높이고 사이드 이펙트 줄일 수 있다.
  return {
    title: document.querySelector(".title"),
    text: document.querySelector(".text"),
    value: document.querySelector(".value"),
  };
};

const getDateTime = (targetDate) => {
  // 해당 함수의 경우 추가적인 스펙이나 기획 변경으로 인해 리펙토링 되어야 할때 고민하게 된다.
  // 1. 함수를 추가로 만들 것이냐.
  // 2. 함수를 유지 보수하며 수정 할 것이냐.
  // 2번에 같은 경우 여러 군데에서 사용하게 되면 쉽지가 않다. 모든 경우에 대해서 고민하고 테스트를 해야 하니까.

  // 먼저 해당 변수 들은 모두 cosnt 로 선언 해주고 바로 리턴 하는 식으로 한다.
  // let month = targetDate.getMonth();
  // let day = targetDate.getDay();
  // let hour = targetDate.getHours();
  const month = targetDate.getMonth();
  const day = targetDate.getDay();
  const hour = targetDate.getHours();

  // 그럼 해당 로직은 필요 없어져서 삭제한다.
  // month = month >= 10 ? month : "0" + month;
  // day = day >= 10 ? day : "0" + day;
  // hour = hour >= 10 ? hour : "0" + hour;

  return {
    month: month >= 10 ? month : "0" + month,
    day: day >= 10 ? day : "0" + day,
    hour: hour >= 10 ? hour : "0" + hour,
  };
};

// 위의 함수를 통해서 다른 함수를 더 만들어서 추가 로직을 구성하면된다.
const getDateTimeTest = () => {
  const currentDateTime = getDateTime(new Date());

  return {
    month: currentDateTime.month + "전",
    day: currentDateTime.day + "전",
    hour: currentDateTime.hour + "전",
  };
};

const genRandomNumber = (min, max) => {
  const random = Math.floor(Math.random() * (max + 1) + min);

  // 사람의 심리상
  // random.**** 와 같은 조작을 하고 싶어지니 싹을 뽑자.

  // return random;
  return Math.floor(Math.random() * (max + 1) + min);
};

/*
 * 정리!!!
 * 임시 변수 사용을 지양하자
 * 이유는
 * => 명령형으로 가득한 로직이 되버린다.
 * => 어디서 어떻게 변화하는지 디버깅 하기 힘들다
 * => 추가 적인 코드를 작성하게 된다
 * 해결책으로는
 * => 함수 나누기
 * => 바로 반환
 * => 고차 함수(map, filer, reduce)
 * => 선언형 코드로 작성
 * */
