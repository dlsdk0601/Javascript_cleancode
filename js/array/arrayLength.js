/*
 * Array.length
 * */

const arr = [1, 2, 3];

console.log(arr.length); // 3

arr.length = 10;

console.log(arr.length); // 10

console.log(arr); // [1, 2, 3, , , , , ....]
/*
 * length 에 값을 집어 넣으면 위와같이 빈 index 가 생긴다.
 * 이거는 큰 문제이기에 조심해야한다.
 * length 는 길이보다는 마지막 index 라는 의미가 더 크다.*/

const arr1 = [1, 2, 3];
arr1[3] = 4;
console.log(arr1); // [1, 2, 3, 4]

arr1[9] = 10;
console.log(arr1.length); // 10 이 나온다.
// js 에서는 length 를 보호하지 못한다.
