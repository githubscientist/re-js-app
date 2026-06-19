import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const Todos = () => {
  const [todos, setTodos] = useState([]);

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
      <ul>
        {
          todos
            .map(todo => (
              <li key={todo.id} style={{ listStyleType: "none" }}>
                <input
                  type="checkbox"
                  style={{ marginRight: '12px', display: 'inline-block', marginBottom: '12px' }}
                  readOnly
                  checked={todo.isDone}
                />
                <Link to={`/dashboard/todo/${todo.id}`}>
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