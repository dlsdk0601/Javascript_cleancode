/*
 * HTML 에 접근하는 JavaScript 코드 추상화
 * */

export const loader = () => {
  const el = document.createElement("div");
  el.setAttribute("class", "loading d-flex");

  const el2 = document.createElement("div");
  el.setAttribute("class", "loading d-flex");

  const el3 = document.createElement("div");
  el.setAttribute("class", "loading d-flex");

  el.append(el2);
  el2.append(el3);
};

// => refactor

const createLoader = () => {
  const el = document.createElement("div");
  const el2 = document.createElement("div");
  const el3 = document.createElement("div");
  // => 이거는 추상화를 더 할수 있다.

  return {
    el,
    el2,
    el3,
  };
};

const createLoaderStyle = ({ el, el2, el3 }) => {
  el.setAttribute("class", "loading d-flex");
  el2.setAttribute("class", "loading d-flex");
  el3.setAttribute("class", "loading d-flex");

  return {
    newEl: el,
    newEl2: el2,
    newEl3: el3,
  };
};

export const loaderRefactor = () => {
  const { el, el2, el3 } = createLoader();
  const { newEl, newEl2, newEl3 } = createLoaderStyle({ el, el2, el3 });

  newEl.append(newEl2);
  newEl2.append(newEl3);
};

//===========

const modal = () => {
  // modal 생성 코드
  return document.querySelector("#modal");
};

const changeColor = (element) => {
  element.styel.backgroundColor = "black";
};

const openModal = (element) => {
  element.classList.add("--open");
};

const closeModal = (element) => {
  element.classList.remove("--open");
};

openModal(modal);
changeColor(modal);
closeModal(modal);
