import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Todo = () => {

    const [todo, setTodo] = useState({});

    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`https://6a3403ef8248ee962fa4f20a.mockapi.io/todos/${id}`)
            .then(response => setTodo(response.data));
    }, []);

  return (
    <div>
          <h4>Title: { todo.title }</h4>
          <p><strong>Description: </strong>{ todo.description }</p>
          <p><strong>Is Completed:</strong> {todo.isDone ? 'Yes' : 'No'}</p>
          <p><strong>Created At: </strong>{todo.createdAt}</p>
          
          <button>Edit</button> &nbsp;
          <button>Delete</button>
    </div>
  )
}

export default Todo;