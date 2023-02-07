// *** 삼항 연산자

function example(){
  return condition1 ? value1
    : condition2 ? value2
    : condition3 ? value3
    : value4;
}

function example1(){
  if(condition1) {return value1;}
  else if(condition2) {return value2;}
  else if(condition3) {return value3;}
  else{return value4;}
}

/*
* 삼항 연산자는 3개의 피연산자로 이뤄져있다.
* 조건 ? 참 : 거짓 의 형태를 띄는데, 이때 참 거짓에는 절대 식이 들어가면 안된다.
* 위의 두 예제는 완전 같은 코드이다.
* 두 예제 모두 가독성이 굉장히 떨어진다. 이럴경우 switch ~ case 를 사용하는게 더 가독성을 높힌다.   */

const ex = condition
  ? (a === 0 ? "zero" : "positive")
  : "negavie";

/*
* 위의 예제는 자주 쓰이는 예제이지만, 24라인에 괄호 하나의 차이가 가독성을 높힌다.*/

function message(isAdd){
  isAdd ? alert("aaa") : alert("dddd")
}
/*
* 위의 예제는 굉장히 안좋은 예제이다.
* alert 의 경우 return 이 void 이기 때문에, undefined 를 반환한다.
* 의미 없는 코드이다. 차라리 alert 메세지를 삼항 연산자를 쓰는게 낫다.*/