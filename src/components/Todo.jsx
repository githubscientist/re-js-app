import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import instance from "../instances/instance";
import todoServices from "../services/todoServices";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodoById, selectTodo } from "../redux/features/todoSlice";

const Todo = () => {

  const todo = useSelector(selectTodo);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();
  
    useEffect(() => {
      if(id) dispatch(fetchTodoById(id));
    }, [dispatch,id]);
  
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