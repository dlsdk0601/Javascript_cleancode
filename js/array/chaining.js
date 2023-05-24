const price = ["2000", "1000", "3000", "4000", "5000"];

const suffixWon = (price) => price + "원";
const isOverOneThousand = (price) => Number(price) > 1000;
const ascendingList = (a, b) => a - b;

function getWonPrice(priceList, orderType) {
  // for(){}
  // => refactor
  const isOverList = priceList.filter(isOverOneThousand);

  // for(){}
  // => refactor
  const sortList = isOverList.sort(ascendingList);

  // for(){}
  // => refactor
  return sortList.map(suffixWon);
}

/*
 * 위와 같이 짜면 좋지만, 여러 메서드가 더 늘어날수 있다.
 * 이때 메소드 체이닝을 활용 할 수 있음
 * */

function newGetWonPrice(priceList, orderType) {
  return priceList
    .filter(isOverOneThousand) // filter 로 조건
    .sort(ascendingList) // 정렬
    .map(suffixWon); // 데이터 가공
}
// => 위와 같이 작성 하면 직관적이고 명확하게 사용 가능
