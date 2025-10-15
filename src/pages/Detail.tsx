import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { NetworkError, Todo } from "../types/todo.type";

export default function Detail() {
  const { id } = useParams<{ id: Todo["id"] }>();

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<null | Error | NetworkError>(null);
  const [data, setData] = useState<Todo | null>(null);

  useEffect(() => {
    const fetchDetail = async (): Promise<void> => {
      try {
        const response = await fetch(`http://localhost:4000/todos/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Todo = await response.json();
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

    fetchDetail();
  }, [id]);
  if (!id) {
    return <div>ID가 없습니다.</div>;
  }

  if (isLoading) return <div style={{ fontSize: 36 }}>로딩중...</div>;
  if (error) {
    console.error(error);
    return (
      <div style={{ fontSize: 24 }}>에러가 발생했습니다: {error.message}</div>
    );
  }
  if (!data) {
    return <div>데이터가 없습니다.</div>;
  }

  return (
    <div>
      <button onClick={() => navigate("/")}>홈으로 이동</button>
      <p>제목: {data.title}</p>
      <p>내용: {data.contents}</p>
      <p>작성일자: {new Date(data.createdAt).toDateString()}</p>
    </div>
  );
}
