// 함수 선언문에서의 타입 지정
function greet(name: string): string {
  return `Hello, ${name}!`;
}

function add(a: number, b: number): number {
  return a + b;
}

function printName(name: string): void {
  // void 타입, 반환 값이 없음
  console.log(name);
}

function throwError(message: string): never {
  throw new Error(message);
  console.log("This line is never executed");
}

// 화살표 함수에서의 타입 지정
const logMessage1: (message: string) => void = (message) => {
  console.log(message);
};
// 또는
type LogMessageType = (message: string) => void;
const logMessage2: LogMessageType = (message) => {
  console.log(message);
};
// 또는
const logMessage3 = (message: string): void => {
  console.log(message);
};

// call signature
type MyFunc = {
  (x: number): number;
};

// 함수에 속성이 필요한 경우(call signature + property)
type Greeter = {
  (name: string): string;
  language: string;
};

const greeter: Greeter = (name) => {
  return `Hello, ${name}!`;
};
greeter.language = "English";

// 사용 예시
console.log(greeter("John")); // "Hello, John!"
console.log(greeter.language); // "English"

// 오버로드 시그니처: 함수 선언문 위에 쓰는 타입 정의들
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any): any {
  return a + b;
}

// 사용 예시
const sum = combine(1, 2); // 3
const joined = combine("Hello, ", "world!"); // "Hello, world!"

// async 함수에서의 타입 지정
// type Todo = {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// };
// TODO: 함수 타입 정의할 것
const getTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  return data;
};
getTodos().then((data) => console.log(data));
