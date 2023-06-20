/*
 * prototype 지양하기
 * 1. 이미 js 는 많이 발전했다.
 * => 직접 만들어서 모듈화 => npm 에 배포 와 같은 방식으로 해결 가능
 * 2. js 빌트인 객체를 건들지 말자. => 런타임에서 에러가 날 확률이 높다.
 * */

class Car {
  constructor(name, brand) {
    this.name = name;
    this.brand = brand;
  }

  sayName() {
    return this.brand + "-" + this.name;
  }
}

const casper = new Car("캐스퍼", "현대");

// 옛날에 prototype 을 건드리면서 만들 때  =>>
function Car1() {
  this.name = name;
  this.brand = brand;
}

Car1.prototype.sayName = function () {
  return this.brand + "-" + this.name;
};
