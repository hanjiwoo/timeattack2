import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuid, v4 } from "uuid";

export default function Home() {
  const [todos, setTodos] = useState([
    {
      id: 아이디1,
      title: 제목1,
      contents: 내용1,
      isDone: false,
    },
    {
      id: 아이디2,
      title: 제목2,
      contents: 내용2,
      isDone: true,
    },
  ]);
  const [title, setTItle] = useState("");
  const [content, setContent] = useState("");

  const selectedTodo = useSelector();

  const navigate = useNavigate();

  const todolist = todos.filter((item) => {
    return item.isDone === false;
  });
  const donelist = todos.filter((item) => {
    return item.isDone === true;
  });

  return (
    <>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const addtodo = {
              id: v4(),
              title,
              contents: content,
              isDone: false,
            };
            setTodos([...todos, addtodo]);
          }}
        >
          <span>제목</span>
          <input
            value={title}
            onChange={(e) => {
              setTItle(e.target.value);
            }}
          />
          <br />
          <span>내용</span>
          <input
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
          <br />
          <button>추가하기</button>
        </form>
      </div>

      <div>
        <h1>TODOLIST</h1>
        {todolist.map((todo) => {
          return (
            <>
              <div>{todo.title}</div>
              <div>{todo.contents}</div>
              <div>
                <button
                  onClick={() => {
                    const movingtodo = todos.map((item) => {
                      if (item.id === todo.id) {
                        return {
                          ...item,
                          isdone: !item,
                          isdone,
                        };
                      }
                    });
                  }}
                >
                  완료버튼
                </button>
              </div>
              <div>
                <button
                  onClick={() => {
                    const deleteTodo = todos.filter((item) => {
                      return todo.id !== item.id;
                    });
                    setTodos(deleteTodo);
                  }}
                >
                  삭제버튼
                </button>
              </div>
              <div>
                <button
                  onClick={() => {
                    navigate("/머더라?");
                  }}
                ></button>
              </div>
            </>
          );
        })}
      </div>
      <div>
        <h1>TODOLIST</h1>
        {donelist.map((todo) => {
          return (
            <>
              <div>{todo.title}</div>
              <div>{todo.contents}</div>
              <div>
                <button
                  onClick={() => {
                    const movingtodo = todos.map((item) => {
                      if (item.id === todo.id) {
                        return {
                          ...item,
                          isdone: !item,
                          isdone,
                        };
                      }
                    });
                  }}
                >
                  완료취소버튼
                </button>
              </div>
              <div>
                <button
                  onClick={() => {
                    const deleteTodo = todos.filter((item) => {
                      return todo.id !== item.id;
                    });
                    setTodos(deleteTodo);
                  }}
                >
                  삭제버튼
                </button>
              </div>
              <div>
                <button
                  onClick={() => {
                    navigate("/${item.id}");
                  }}
                ></button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
