// 단순 객체 타입
type Person = {
  name: string;
  age: number;
  isStudent?: boolean;
  readonly residentId: string;
};

const student: Person = {
  name: "Jane",
  age: 22,
  isStudent: true,
  residentId: "9876543210",
};

// student.residentId = "1234567890";

// 중첩 객체 타입
type Address = {
  street: string;
  city: string;
  country: string;
};

// 객체 타입간 인터섹션은 모든 조건을 만족하는 새로운 객체 타입
type PersonWithAddress = Person & {
  address: Address;
};
// type PersonWithAddress = {
//   name: string;
//   age: number;
//   isStudent?: boolean;
//   readonly residentId: string;
//   address: Address;
// };

const studentWithAddress: PersonWithAddress = {
  name: "John",
  age: 24,
  isStudent: false,
  residentId: "1234567890",
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: "USA",
  },
};
