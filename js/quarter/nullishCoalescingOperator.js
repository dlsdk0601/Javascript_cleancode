/*
 * null 병합 연산자
 * 최신 문법이기에 옛날 브라우저에서 안돌아갈 수도있다. 이럴경우 폴리필 준비해야함
 * */

function createElement(type, height, width) {
  const element = document.createElement(type || "div");
  element.style.height = `${height || 10}px`;
  element.style.width = `${width || 10}px`;

  return element;
}

const el = createElement("div", 0, 0);

console.log(el.style.height); // 0px 이 아니라 10px이 나온다
/*
 * 숫자 0은 false 에 해당하기 때문이다. !!0 => false 로 나온다
 * null 과 undefined 만 분리하길 원한다면 널 병합 연산자를 사용한다 */

function newCreateElement(type, height, width) {
  const element = document.createElement(type ?? "div");
  element.style.height = `${height ?? 10}px`;
  element.style.width = `${width ?? 10}px`;

  return element;
}

const el2 = newCreateElement("div", 0, 0);

console.log(el2.style.height); // 0px

/*
 * null 연산자가 마냥 좋은건 아니다.
 * null 과 undefined 만을 걸러낼 것인지 아닌지 판단해서 사용할 것.
 * || ?? 두 가지는 절대 같이 사용 할 수 없다.
 * (a || b ?? c) => Error */
