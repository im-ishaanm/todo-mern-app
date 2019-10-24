import React, { useState, useEffect } from "react";
import axios from "axios";

function EditTodo({ match }) {
  const [todoDesc, setTodoDesc] = useState("");
  const [todoResponsible, setTodoResponsbile] = useState("");
  const [todoPriority, setTodoPriority] = useState("");
  const [todoCompleted, setTodoCompleted] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:4000/todos/" + match.params.id)
      .then(res => {
        setTodoDesc(res.data.todo_description);
        setTodoResponsbile(res.data.todo_responsible);
        setTodoPriority(res.data.todo_priority);
        setTodoCompleted(res.data.todo_completed);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const onChangeDescription = e => {
    setTodoDesc(e.target.value);
  };

  const onChangeResponsible = e => {
    setTodoResponsbile(e.target.value);
  };

  const onChangeTodoPriority = e => {
    setTodoPriority(e.target.value);
  };

  const onChangeTodoCompleted = e => {
    setTodoCompleted(!todoCompleted);
  };

  const onSubmit = e => {
    e.preventDefault();
    const obj = {
      todo_description: todoDesc,
      todo_responsible: todoResponsible,
      todo_priority: todoPriority,
      todo_completed: todoCompleted
    };
    axios
      .post("http://localhost:4000/todos/update/" + match.params.id, obj)
      .then(res => console.log(res.data));
  };

  return (
    <div>
      <h3>Update Todo</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Description:</label>
          <input
            type="text"
            class="form-control"
            value={todoDesc}
            onChange={onChangeDescription}
          />
        </div>
        <div className="form-group">
          <label>Responsible:</label>
          <input
            type="text"
            class="form-control"
            value={todoResponsible}
            onChange={onChangeResponsible}
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
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="completedCheckbox"
              onChange={onChangeTodoCompleted}
              checked={todoCompleted}
              value={todoCompleted}
            />
            <label className="form-check-label" htmlFor="completedCheckbox">
              Completed
            </label>
          </div>
          <br />
          <div className="form-group">
            <input type="submit" value="Update Todo" className="btn btn-dark" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditTodo;
