import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import instance from "../instances/instance";
import todoServices from "../services/todoServices";

const Todo = () => {

  const [todo, setTodo] = useState({});
  const navigate = useNavigate();

  const { id } = useParams();

  const fetchTodoById = async () => {
    try {
      const response = await todoServices.getTodoById(id);
      setTodo(response.data);
    } catch (error) {
      console.log(`Error fetching todo by id`, error);
      setTodo({});
    }
  }  
  
    useEffect(() => {
      fetchTodoById();
    }, []);
  
  const handleDelete = async () => {
    const shouldDelete = confirm('Are you sure want to delete?');
    if (shouldDelete) {
      try {
        await todoServices.deleteTodoById(id);
        alert('Todo is deleted');
        navigate('/dashboard/todos');
      } catch (error) {
        console.log(`Error deleting todo`, error);
      }
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