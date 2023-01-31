// *** 전역 변수를 지양 하자.

// 전역 공간 => window / global
// window => 브라우저 환경에서 돌아가면 window 가 최상위 이다.
// nodeJS 환경에서는 global 이 최상이다.
// 최상위 공간이 전역 이다.

var globalVar = "global";

console.log(globalVar);
// console.dir(window) 을 확인 했을 때, 객체 속에 globalVar 라는 키값이 존재한다.
// 이는 몽키 패치 때문에 일어나는 일이고,
// 전혀 다른 파일 (global1.js) 에서도 conosle.log(window.globalVar) 로 확인해보면
// 접근이 가능하다.
// window.globalVar 에 접근이 된다는건 그냥 globalVar 에도 접근이 가능하다는 것이다.

// *** => 파일을 나뉘면 스코프가 나눠질줄 알았는데 아니다!;


var setTimeout = "setTimeout";
// global1.js 파일에 있는 setTimeout 에 영향을 준다. 굉장히 이슈되는 문제

const arr = [1, 2, 3];
for (var i = 0; i < arr.length; i++) {
  const element = arr[i];
}
// for 문을 돌릴때 var를 쓰게 되면 해당 i 도 window 객체 안에 정의된다.
// var 는 함수 스코프안에서 영향을 끼치기 때문에 함수가 아닌 for 문 에서도 전역으로 정의된다. (let 을 쓰자)

// *** 전역 공간을 더럽히지 않기 위해 여러가지 방인이 있다.
/*
* IIFE (즉시 실행 함수)
* Module
* Closure
* let & const
* 위 의 4가지가 전역 공간을 더럽히지 않는 방법들이다.
* */