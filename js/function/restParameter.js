/*
 * Rest Parameters
 * */

// 총함 계산 함수
const sum = () => {
  // argument 는 객체이다. 유사 배열임
  // 때문에 Array.from 이 필요했다
  return Array.from(arguments).reduce((acc, curr) => acc + curr);
};

sum(1, 2, 3, 4, 5);

const sum1 = (...args) => {
  // args 는 자동으로 파라미터를 배열로 만들어준다
  return args.reduce((acc, curr) => acc + curr);
};

// 추가 값으로 쓼 수도 있다.

const sum2 = (init, ...args) => {
  console.log(init);
  console.log(args);
};

sum2(1, 2, 3, 4, 5, 6); // init => 1, args = [2, 3, 4, 5, 6]

// 대신에 나머지 매게변수는 나머지 이기 때문에 항상 마지막에 적어준다.
// function test(init, ...args, bonus) (X)
// function test(init, bonus, ...args) (O)
