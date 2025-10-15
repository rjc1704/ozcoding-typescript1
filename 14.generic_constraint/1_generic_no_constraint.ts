// 문자열 배열의 첫 번째 요소를 반환
function getFirstString(arr: string[]): string | undefined {
  return arr[0];
}

// 숫자 배열의 첫 번째 요소를 반환
function getFirstNumber(arr: number[]): number | undefined {
  return arr[0];
}

// 불린 배열의 첫 번째 요소를 반환
function getFirstBoolean(arr: boolean[]): boolean | undefined {
  return arr[0];
}

// 사용
const firstStr = getFirstString(["a", "b", "c"]);
const firstNum = getFirstNumber([1, 2, 3]);
const firstBool = getFirstBoolean([true, false]);

type UserData<T> = {
  name: string;
  userKey: T;
};

const UserA: UserData<string> = {
  name: "User A",
  userKey: "123",
};
const UserB: UserData<number> = {
  name: "User A",
  userKey: 123,
};
const UserC: UserData<boolean> = {
  name: "User A",
  userKey: true,
};
const UserD: UserData<[string, number]> = {
  name: "User A",
  userKey: ["123", 123],
};

// T는 나중에 채워질 "빈칸"
function identity<T>(value: T): T {
  return value;
}

// 호출할 때 빈칸을 채움
identity<string>("hello"); // T = string
identity<number>(42); // T = number
identity<boolean>(true); // T = boolean
