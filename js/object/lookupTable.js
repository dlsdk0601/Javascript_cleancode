/*
 * 순람표
 * key : value 로 나열된 배열
 * */

function getUserType(type) {
  if (type === "ADMIN") {
    return "관리자";
  }

  if (type === "INSTRUCTOR") {
    return "강사";
  }

  if (type === "STUDENT") {
    return "학새";
  }

  if (type === "ADMIN") {
    return "관리자";
  }
}
// 이게 깔끔해 보이지만 추가 type 이 추가될때마다 수정해줘야한다.
// 이런 경우는 switch ~ case 선택이 더 깔끔하지만, 아직 문제가 해결되진 않음.

// 이전에 배운 computed property 로 해결 가능
function getUserTypeRefactor(type) {
  const USER_TYPE = {
    ADMIN: "관리자",
    INSTRUCTOR: "강사",
    STUDENT: "학생",
  };

  return USER_TYPE[type] ?? "해당 없음";
}

// 더 깔끔하게 가능
function getUserTypeRefactor(type) {
  return (
    {
      ADMIN: "관리자",
      INSTRUCTOR: "강사",
      STUDENT: "학생",
    }[type] ?? "해당 없음"
  );
}
// 지역 변수 없이 이런식으로도 가능 하지만 권장 x
