const initialState = [
  {
    id: 아이디1,
    title: 제목1,
    contents: 내용1,
    isDone: 완료여부(bloolean),
  },
  {
    id: 아이디2,
    title: 제목2,
    contents: 내용2,
    isDone: 완료여부(bloolean),
  },
];
const ADD_TODO = "todos/ADD_TODO";
const DELETE_TODO = "todos/DELETE_TODO";
const SWITCH_TODO = "todos/SWITCH_TODO";

export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};
export const deleteTodo = (payload) => {
  return { type: DELETE_TODO, payload };
};
export const switchTodo = (payload) => {
  return { type: SWITCH_TODO, payload };
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = action.payload;
      return [newTodo, ...state];
    case DELETE_TODO:
      const todoId = action.payload;
      return state.filter((todo) => {
        return todo.id !== todoId;
      });

    case SWITCH_TODO:
      const { id, editingText } = action.payload;
      return state.map((todo) => {
        if (todo.id === id) {
          return { ...todo, content: editingText };
        }
        return todo;
      });

    default:
      return state;
  }
};

export default todos;
