import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Detail() {
  const navigate = useNavigate();
  const selectedTodo = useSelector();
  return (
    <>
      <div>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          홈으로
        </button>
      </div>
      <div>
        <button>삭제하기</button>
      </div>
    </>
  );
}
