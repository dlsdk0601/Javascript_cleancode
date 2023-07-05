/*
 * Callback Function
 * */

function register() {
  const isConfirm = confirm("성공");

  if (isConfirm) {
    // some code
  }
}

function login() {
  const isConfirm = alert("성공");

  if (isConfirm) {
    // some code
  }
}

// => 위와 같은 코드를 리텍토링 한다면
function confirmModal(message, callback) {
  const isConfirm = confirm(message);

  if (isConfirm && callback) {
    callback();
  }
}

function register1() {
  confirmModal("성공", () => {});
}

function login1() {
  confirmModal("성공", () => {});
}
