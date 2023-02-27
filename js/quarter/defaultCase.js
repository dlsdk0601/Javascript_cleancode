/*
 * Default Case */

function sum(x, y) {
  // ts 를 사용하게 되면 더 명확해 지지만, 파라미터가 제대로 넘어오지 않았을 경우 default 값을 사용하는게 좋다.
  // 이런 default 값은 기획팀과 상의해서 정해야한다.
  x = x || 1;
  y = y || 1;
  return x + y;
}

sum(100, 200); // 300

function registerDay(userInputDay) {
  switch (userInputDay) {
    case "월요일":
      return true;
    case "화요일":
      return true;
    case "수요일":
      return true;
    case "목요일":
      return true;
    case "금요일":
      return true;
    case "토요일":
      return true;
    case "일요일":
      return true;
    default:
      throw new Error("잘못 쳤다");
  }
}

e.target.value = "월ㄹ요일"; // 오타를 사용자가 쳤다
registerDay(e.target.value); // => 이럴 경우를 위해 defualt 가 필요한다.
