/*
 * continue & break
 * */

const orders = ["first", "second", "third"];

orders.forEach(function(order){
  if(order === "second"){
    // continue; => 이 다음 로직 실행 없이 다음 loop 로 이동
    break; // 반복문 stop
    // => 여기서 두가지 다 syntax 에러 가 난다.
    // filter, map 등등 모두 continue 와 break 가 에러가 난다.
  }

  console.log(order)
})

try{
  orders.forEach(function(order){
    if(order === "second"){
      throw new Error(); // 여기서는 이렇게 에러를 던진다.
    }

    console.log(order)
  })
}catch (e) {
  console.log(e);
}

// 그외에 continue 와 break 사용 하고 싶을때

for (let i = 0; i < orders.length; i++) {

}

for (const order of orders) {

}

for (const ordersKey in orders) {

}

// 와 같은 방법들이 있다.
