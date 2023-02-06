// *** 값(value) 식(expression / 삼항연산자) 문(statement / if 문, for 문)

// JSX
// ReactDOM.render(<div id="msg">Hello World!</div>, mountNode);

// is transformed to this JS:
// 위에서 JSX 의 문법이 바벨을 만나면서 아래와 같이 바뀐다.
// ReactDOM.render(React.createElement("div", {id: "msg"}, "Hello World!"), mountNode);

// 위의 예제를 반대로 JSX 부터 작성 한다면 아래와 같다.
// JSX:
// <div id={if (condition) {"msg"}}>Hello World!</div>

// transformed to JS:
// React.createElement("div", {id: if (condition) {"msg"}}, "Hello World!")

/*
 * 13 라인이 리액트가 읽기 편한 문법으로 16번 라인 처럼 바꼈다.
 * 과연 작동할까?
 * 이미 문법이 틀렸기 때문에 작동하지 않는다.
 * if 문 자체를 객체의 값으로 넣어서, 동작하지 않는다.
 * React 에서는 JSX 안에서 값 식 문 중에서 문을 제외한 값 과 식 만을 가지고 비즈니스 로직을 짜야하는 경우가 대다수이다.*/

// <div id={ condition ? "msg" : null}>Hello World!</div>
/* 얘는 잘된다. 삼항 연산자 이기 때문에*/

// 그럼에도 굳이 if 를 사용하고 싶다면 IIFE switch ~ case 를 사용하자
// <p>
//   {(() => {
//     switch (this.state.color){
//       case "red":
//         return "#FF0000"
//       case "blue":
//         return "#0000FF"
//       default:
//         return "#FFFF"
//     }
//   })()}
// </p>
/*
 * IIFE 는 내부에 값과 식만 넣어야한다. */
