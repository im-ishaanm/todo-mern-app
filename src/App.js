import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import CreateTodo from './components/create-todo.component';
import EditTodo from './components/edit-todo.component';
import TodosList from './components/todos-list.component';

function App() {
  return (
    <Router>
      <div className='container'>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>

          <Link to='/' className='logo nav-link'>Todos</Link>
          <Link to='/create' className='create-todo-link nav-link'>Create Todo</Link>

        </nav>
        <Route path='/' exact component={TodosList} />
        <Route path='/edit/:id' component={EditTodo} />
        <Route path='/create' component={CreateTodo} />
      </div>
    </Router>
  );
}

export default App;