let num = 42;
console.log(typeof num); // "number" (자바스크립트와 동일하게 동작)

let str = "hello";
console.log(typeof str); // "string" (자바스크립트와 동일하게 동작)

const person = {
  name: "John",
  age: 30,
  email: "john@example.com",
};

// 객체의 타입 추론
type PersonType = typeof person;

// 객체 타입의 키들을 유니언 타입으로 추출
type PersonKeys = keyof PersonType; // 'name' | 'age' | 'email'

// 제네릭 함수를 사용하여 객체의 특정 속성에 접근
const getProperty = (
  obj: PersonType,
  key: PersonKeys,
): PersonType[PersonKeys] => {
  return obj[key];
};

// 함수 사용 예시
const name = getProperty(person, "name"); // "John"
const age = getProperty(person, "age"); // 30
const email = getProperty(person, "email"); // "john@example.com"
