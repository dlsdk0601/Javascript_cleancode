console.log(globalVar); // "global"

setTimeout(() => {
  console.log("1초");
}, 1000);
// 1초 후에 콘솔을 찍으려 했으나, global.js 파일에서 setTimeout 이라는 변수가 선언되서 에러가 난다.