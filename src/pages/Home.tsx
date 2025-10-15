import { useState, useEffect } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import reactLogo from "../assets/react.svg";
import { NetworkError, Todo } from "../types/todo.type";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<null | Error | NetworkError>(null);
  const [data, setData] = useState<Todo[]>([]);

  const fetchData = async (): Promise<void> => {
    try {
      const response = await fetch("http://localhost:4000/todos");
      if (!response.ok) {
        throw new NetworkError(`HTTP error! status: ${response.status}`);
      }
      const data: Todo[] = await response.json();
      setData(data);
    } catch (err) {
      if (err instanceof NetworkError) {
        setError(err);
      } else {
        setError(new Error(String(err)));
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <div style={{ fontSize: 36 }}>로딩중...</div>;
  }

  if (error) {
    console.error(error);
    return (
      <div style={{ fontSize: 24 }}>에러가 발생했습니다: {error.message}</div>
    );
  }

  return (
    <>
      <h2>
        <img src={reactLogo} alt="logo" />
        서버통신 투두리스트 by useState
      </h2>
      <TodoForm fetchData={fetchData} setError={setError} />
      <TodoList todos={data} />
    </>
  );
}
