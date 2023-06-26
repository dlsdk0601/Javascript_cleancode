/*
 * default value
 * */

function create(options) {
  options = options || {};
  var margin = options.margin || 0;
  var center = options.center || false;
  // 이렇게 하나하나 설정 해주면 할일이 많다.
  // 애초부터 기본값을 넣어주자

  return {
    margin,
    center,
  };
}

create(); //{ margin: 0, center: false }

// 파라미터 기본 값을 이렇게 셋팅 해주자
function create1({ margin = 0, center = false } = {}) {
  // ...
  return {
    margin,
    center,
  };
}

create1(); // { margin: 0, center: false }

const required = (arg) => {
  throw new Error("required is" + arg);
};

function createCarousel({
  items = required("items"),
  margin = required("margin"),
  center = false,
}) {
  // some code
  return {
    margin,
    center,
  };
}
// => required 함수를 통해서 필수값을 확인 할 수 있는 방법
