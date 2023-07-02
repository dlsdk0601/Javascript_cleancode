/*
 * Arrow Function
 * 일반 함수와 화살표 함수는 this의 차이가 있다.
 * 화살표 함수는 scope 를 레시컬 scope 를 가진다.
 * => 바로 직전의 상위를 바라본다.
 * */

const user = {
  name: "ina",
  getName: () => {
    return this.name;
  },
  newFriends: () => {
    // call, apply, bind
    const newList = Array.from(arguments);

    // => 위와 같은 함수들은 화살표 함수 안에서 모두 사용 할수 없게 된다.
    // 대신할걸 사용 해야한다. arguments => ...rest 로 사용한다.
  },
};

console.log(user.getName());

const Person = (name, city) => {
  this.name = name;
  this.city = city;
};

const person = new Person("ina", "busan"); // => 사용 불가. this 가 가지는 의미가 다르다.
// 이럴 경우 그냥 class 문법으로 해결한다.
