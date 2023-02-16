const getActiveUserName = (user) => {
  if (user.name) {
    return user.name;
  } else {
    return "이름 없음";
  }
};

// => 위의 방식보다 아래의 방식이 더 좋다

const getActiveUserName1 = (user) => {
  if (user.name) {
    return user.name;
  }

  return "이름 없음";
};
