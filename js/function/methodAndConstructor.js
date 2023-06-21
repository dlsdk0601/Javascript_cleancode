/*
 * 함수, 메서드, 생성자
 * */

// 함수
function func() {
  return this;
}

// 객체의 메서드
const obj = {
  method() {
    return this;
  },
};

// 생성자 함수 (Class)
function Func() {
  return this;
}

/*
 * 함수
 * 1급 객체
 * => 변수나 데이터에 담길 수 있다.
 * => 매게변수로 전달 가능 (콜백함수)
 * => 함수가 함수를 반환 (고차함수)
 * */
func(); // => global (함수의 this는 전역객체를 바라본다)

// 메서드 => 객체에 의존성이 있는 함수, OOP 행동을 의미
obj.method(); // 호출한 객체를 바라본다.

// => 생성자 함수 => 인스턴스를 생성하는 역할 => Class
const ins = new Func(); // 생성될 인스턴스를 가르킨다.

/*
 * 3가지 모두 this의 용도가 다르다.
 * */
