import axios from "axios";
import { useEffect, useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  // this run once during the component renders
  useEffect(() => {
    // make an api call
    axios
      .get('https://6a3403ef8248ee962fa4f20a.mockapi.io/todos')
      .then(response => setTodos(response.data));
  }, []);

  console.log(todos);

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {
          todos
            .map(todo => (
              <li key={todo.id}>{ todo.title }</li>
            ))
        }
      </ul>
    </div>
  )
}

export default Todos;