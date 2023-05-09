/*
 * 배열 고차 함수
 *
 * 1. 원화 표기
 * */

const price = ["2000", "1000", "3000", "4000", "5000"];

function getWonPrice(priceList) {
  // let temp = [];

  // for (let i = 0; i < priceList.length; i++) {
  //   temp.push(priceList[i] + "원");
  // }
  //
  // return temp;

  // => refactor
  // 임시 변수 temp 가 필요가 없어진다.
  return priceList.map((price) => price + "원");
}

const res = getWonPrice(price);

console.log(res);

/*
 * 조건
 * 원화 표기
 * 1000원 초과 리스트만 출력
 * 가격 순 정렬*/

const suffixWon = (price) => price + "원";
const isOverOneThousand = (price) => Number(price) > 1000;

function getWonPriceRefactor(priceList) {
  const isOverList = priceList.filter(isOverOneThousand);

  return isOverList.map(suffixWon);
}

const res1 = getWonPriceRefactor(price);

console.log(res1);
