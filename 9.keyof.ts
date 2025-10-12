{
  interface User {
    id: number;
    name: string;
    email: string;
    age: number;
  }

  // keyof User = "id" | "name" | "email" | "age"
  type UserKeys = keyof User;

  // 사용 예시
  function getProperty(user: User, key: UserKeys) {
    return user[key];
  }

  const user = { id: 1, name: "김철수", email: "kim@email.com", age: 25 };

  getProperty(user, "name"); // ✅ 가능
  getProperty(user, "email"); // ✅ 가능
  getProperty(user, "height"); // ❌ 에러! User에 height 속성 없음
}
