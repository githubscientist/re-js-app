import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [filterTodos, setFilterTodos] = useState('all');

  // this run once during the component renders
  useEffect(() => {
    // make an api call
    axios
      .get('https://6a3403ef8248ee962fa4f20a.mockapi.io/todos')
      .then(response => setTodos(response.data));
  }, []);

  return (
    <div>
      <h1>Todos</h1>

      <p>
        Filter:
        <select name="filterTodos" id="filterTodos" onChange={e => setFilterTodos(e.target.value)}>
          <option value="all">All Todos</option>
          <option value="completed">Completed Todos</option>
          <option value="incomplete">Incomplete Todos</option>
        </select>
      </p>

      <ul>
        {
          todos
            .filter((todo) => {
              switch (filterTodos) {
                case 'all':
                  return true;
                case 'completed':
                  if (todo.isDone) {
                    return true;
                  }
                  return false;
                case 'incomplete':
                  if (!todo.isDone) {
                    return true;
                  }
                  return false;
              }
            })
            .map(todo => (
              <li key={todo.id} style={{ listStyleType: "none" }}>
                <input
                  type="checkbox"
                  style={{ marginRight: '12px', display: 'inline-block', marginBottom: '12px' }}
                  readOnly
                  checked={todo.isDone}
                />
                <Link to={`/dashboard/todo/${todo.id}`} style={{ textDecoration: "none", color: "black" }}>
                  {todo.title}
                </Link>
              </li>
            ))
        }
      </ul>
    </div>
  )
}

export default Todos;