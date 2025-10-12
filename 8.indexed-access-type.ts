interface User {
  id: number;
  name: string;
  email: string;
}

// 인덱스드 엑세스 타입으로 id 타입 추출""
function findUserById(users: User[], id: User["id"]) {
  return users.find((user) => user.id === id);
}

function deleteUser(users: User[], id: User["id"]) {
  return users.filter((user) => user.id !== id);
}

// 사용
const users = [
  { id: 1, name: "김철수", email: "kim@email.com" },
  { id: 2, name: "이영희", email: "lee@email.com" },
];

findUserById(users, 1); // ✅ 타입: User | undefined
deleteUser(users, 2); // ✅ 타입: User[]
// findUserById(users, "1"); // ❌ 에러! id는 number여야 함
