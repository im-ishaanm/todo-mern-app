import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Todo = props => {
  return (
    <tr>
      <td className={props.todo.todo_completed ? "completed" : ""}>
        {props.todo.todo_description}
      </td>
      <td className={props.todo.todo_completed ? "completed" : ""}>
        {props.todo.todo_responsible}
      </td>
      <td className={props.todo.todo_completed ? "completed" : ""}>
        {props.todo.todo_priority}
      </td>
      <td>{props.todo.todo_completed}</td>
      <td>
        <Link to={"/edit/" + props.todo._id}>Edit</Link>
      </td>
    </tr>
  );
};

function TodosList() {
  useEffect(() => {
    axios
      .get("http://localhost:4000/todos/")
      .then(res => {
        setTodos(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const [todos, setTodos] = useState([]);

  function TodosList() {
    return todos.map((currentTodo, i) => {
      return <Todo todo={currentTodo} key={i} />;
    });
  }

  return (
    <div>
      <h3>Todos List</h3>
      <table style={{ marginTop: 20 }} className="table table-striped">
        <thead>
          <tr>
            <th>Description</th>
            <th>Responsible</th>
            <th>Priority</th>
            <th>Completed</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{TodosList()}</tbody>
      </table>
    </div>
  );
}

export default TodosList;
