import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const Todo = () => {

  const [todo, setTodo] = useState({});
  const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`https://6a3403ef8248ee962fa4f20a.mockapi.io/todos/${id}`)
            .then(response => setTodo(response.data));
    }, []);
  
  const handleDelete = () => {
    // get a confirmation from the user to delete
    const shouldDelete = confirm('Are you sure want to delete?');
    if (shouldDelete) {
      // we can proceed with the deletion
      // make an api call to delete the todo with id
      axios
        .delete(`https://6a3403ef8248ee962fa4f20a.mockapi.io/todos/${id}`)
        .then(() => {
          alert('Todo is deleted!');

          // re-direct the user to the all todos page
          navigate('/dashboard/todos')
        })
    }
  }

  return (
    <div>
          <h4>Title: { todo.title }</h4>
          <p><strong>Description: </strong>{ todo.description }</p>
          <p><strong>Is Completed:</strong> {todo.isDone ? 'Yes' : 'No'}</p>
          <p><strong>Created At: </strong>{todo.createdAt}</p>
          
      
          <button onClick={() => navigate(-1)}>Back</button> &nbsp;
          <button onClick={() => navigate(`/dashboard/todo/${id}/edit`)}>Edit</button> &nbsp;
          <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default Todo;