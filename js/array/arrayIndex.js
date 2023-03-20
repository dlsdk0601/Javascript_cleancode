/*
 * 배열 요소 접근하기
 * */

const array = [1, 2, 3];

function operateTime(input, oerators, is) {
  // input[0], input[1] 외에 사용 할수 있는 방법 중 첫번째는 구조 분해
  const [first, second] = input;

  // 파라미터에서 바로 구조 분해 할당 가능
  // function operateTime([first, second], oerators, is) {

  // lodash 를 사용 한다면 head 라는 util 이 있다. 첫번째 인자를 반환한다.

  input[0].split("").forEach((num) => {
    cy.get(".digit").contains(num).click();
  });

  input[1].split("").forEach((num) => {
    cy.get(".digit").contains(num).click();
  });
}
