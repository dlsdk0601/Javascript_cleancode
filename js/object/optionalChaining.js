/*
 * Optional(선택적) chaining(?.)
 * */

const obj = {
  name: "value",
};

console.log(obj.name); // value

const res = {
  data: {
    userList: [{ name: "1", infor: { tel: "010", email: "@com" } }],
  },
};

console.log(res.data.userList[0].infor.email); // @com
// => 런타임에서 터질 수도 있다.

function getUserEmailByIndex(index) {
  // 만약 userList 가 없다면???
  return res?.data?.userList[index]?.infor?.email ?? "알수 없는 에러";
}

console.log(getUserEmailByIndex(0)); // @com
