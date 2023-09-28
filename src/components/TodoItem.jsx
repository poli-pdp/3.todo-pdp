/* eslint-disable react/prop-types */
import style from "./TodoItem.module.css";
const TodoItem = ({ todo, deleteTodo, completedTodo }) => {
  return (
    <li className={style.list}>
      <div
        className={`${style.listItem} ${todo.completed ? style.completed : ""}`}
      >
        {todo.title}
      </div>
      <div>
        <button onClick={() => deleteTodo(todo)}>D</button>
        <button onClick={() => completedTodo(todo)}>C</button>
        <button>E</button>
      </div>
    </li>
  );
};

export default TodoItem;
