import React, { useState } from "react";
import axios from "axios";

function CreateTodo() {
  const [todoDesc, setTodoDesc] = useState("");
  const [todoResponsible, setTodoResponsible] = useState("");
  const [todoPriority, setTodoPriority] = useState("");
  const [todoCompleted, setTodoCompleted] = useState(false);

  const onChangeTodoDescription = e => {
    setTodoDesc(e.target.value);
  };

  const onChangeTodoResponsible = e => {
    setTodoResponsible(e.target.value);
  };

  const onChangeTodoPriority = e => {
    setTodoPriority(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();

    console.log(`Form Submitted!`);
    console.log(`Todo Description : ${todoDesc}`);
    console.log(`Todo Priority : ${todoPriority}`);
    console.log(`Todo Responsible : ${todoResponsible}`);
    console.log(`Todo Completed : ${todoCompleted}`);

    const newTodo = {
      todo_description: todoDesc,
      todo_responsible: todoResponsible,
      todo_priority: todoPriority,
      todo_completed: todoCompleted
    };

    axios
      .post("http://localhost:4000/todos/add", newTodo)
      .then(res => console.log(res.data));

    setTodoCompleted(false);
    setTodoPriority("");
    setTodoResponsible("");
    setTodoDesc("");
  };

  return (
    <div style={{ marginTop: 20 }}>
      <h3>Create New Todo</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            className="form-control"
            value={todoDesc}
            onChange={onChangeTodoDescription}
          />
        </div>
        <div className="form-group">
          <label>Responsible</label>
          <input
            type="text"
            className="form-control"
            value={todoResponsible}
            onChange={onChangeTodoResponsible}
          />
        </div>
        <div className="form-group">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="priorityOptions"
              id="priorityLow"
              value="Low"
              checked={todoPriority === "Low"}
              onChange={onChangeTodoPriority}
            />
            <label className="form-check-label">Low</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="priorityOptions"
              id="priorityMedium"
              value="Medium"
              checked={todoPriority === "Medium"}
              onChange={onChangeTodoPriority}
            />
            <label className="form-check-label">Medium</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="priorityOptions"
              id="priorityHigh"
              value="High"
              checked={todoPriority === "High"}
              onChange={onChangeTodoPriority}
            />
            <label className="form-check-label">High</label>
          </div>
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Create Todo"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}

export default CreateTodo;
