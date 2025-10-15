// DOM 요소 조작 시 자주 사용

const inputElement = document.getElementById("username") as HTMLInputElement;
inputElement.value = "hello"; // HTMLInputElement로 단언했으므로 value 접근 가능

// API 응답 처리 시
const apiResponse = {
  id: 1,
  name: "김개발",
  email: "kim@example.com",
};

interface User {
  id: number;
  name: string;
  email: string;
}

const user = apiResponse as User; // API 응답을 User 타입으로 단언

// non-null assertion
// 기본 사용법
let userName: string | null;
console.log(userName!.toUpperCase()); // ! 로 null이 아님을 단언

// DOM 요소에서 자주 사용 (하지만 주의 필요!)
const button = document.getElementById("submit-btn")!; // element가 확실히 존재한다고 단언
button.addEventListener("click", () => console.log("clicked"));
