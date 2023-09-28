import style from "./Form.module.css";
const Form = () => {
  return (
    <form>
      <input name="task" className={style.taskInput} />
      <button className={style.button}>Add</button>
    </form>
  );
};

export default Form;
