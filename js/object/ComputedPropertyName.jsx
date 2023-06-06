const SomeComponent = () => {
  const [state, setState] = useState({ id: "", password: "" });

  const handleChange = (e) => {
    setState({
      [e.target.name]: e.target.value, // e.target.name 이 property 의 속석 이름으로 사용하는거임.
      // key 에 [] 를 사용하면 동적으로 사용 가능하다.
    });
  };

  return (
    <>
      <input type="text" value={state.id} onChange={handleChange} name="id" />
      <input
        type="text"
        value={state.password}
        onChange={handleChange}
        name="password"
      />
    </>
  );
};

/*
 * 2 번째 케이스
 * */

const noop = createAction("INCREMENT");

const reducer = handleAction({
  [noop]: (state, action) => ({
    counter: state.counter + action.payload,
  }),
});

// 리덕스에서 이렇게 Action 의 property 의 이름을 동적으로 사용 가능

/*
 * 3번째 케이스
 * */

const funcName = "func";

const obj = {
  [funcName]() {
    return "func";
  },
};
console.log(obj[funcName]());
// obj 에 funcName 이라는 속성에 함수가 들어감.

// 결론은 이게 리액트 같은 라이브러리 자체의 문법이 아닌, js 의 문법이다.
// babel 로 돌려보면 잘 변환되서 돌아감.
