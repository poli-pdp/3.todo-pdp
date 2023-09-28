/* eslint-disable react/prop-types */
import { useEffect } from "react";
import style from "./Form.module.css";
import uuid4 from "uuid4";
const Form = ({ inputTodo, setInputTodo, todos, setTodos, edit, setEdit }) => {
  const handlerSubmit = (e) => {
    e.preventDefault();
    if (edit) {
      editTodo(edit);
    } else {
      const newTodo = {
        id: uuid4(),
        title: inputTodo,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputTodo("");
    }
  };

  const editTodo = (todo) => {
    const newTodos = todos.map((item) =>
      item.id === todo.id ? { ...todo, title: inputTodo } : item
    );
    setTodos(newTodos);
    setEdit(null);
  };

  useEffect(() => {
    if (edit) setInputTodo(edit.title);
    else setInputTodo("");
  }, [edit]);

  return (
    <form onSubmit={handlerSubmit}>
      <input
        name="task"
        className={style.taskInput}
        value={inputTodo}
        onChange={(e) => setInputTodo(e.target.value)}
      />
      <button type="submit" className={style.button}>
        {edit ? "Edit" : "Add"}
      </button>
    </form>
  );
};

export default Form;
