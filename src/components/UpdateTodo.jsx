import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import instance from '../instances/instance';
import todoServices from "../services/todoServices";

const UpdateTodo = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
    const [isDone, setIsDone] = useState(false);
    const { id } = useParams();

    const navigate = useNavigate();
    
  const fetchTodoById = async (id) => {
    try {
      const response = await todoServices.getTodoById(id);
      setTitle(response.data.title);
      setDescription(response.data.description);
      setIsDone(response.data.isDone);
    } catch (error) {
      console.log(`Error fetching todo by id`, error);
      setTitle('');
      setDescription('');
      setIsDone(false);
    }
  }
  
  useEffect(() => {
    fetchTodoById(id);
  }, []);

  const handleUpdateTodo = async (e) => {
    e.preventDefault();

    try {
      await todoServices.updateTodoById(id, {
        title, description, isDone
      });
      alert('Todo updated!');
      navigate('/dashboard/todos');
    } catch (error) {
      console.log(`Error updating todo`, error);
    }
  }

  return (
    <div>
      <h3>Update Todo</h3>
      <form onSubmit={handleUpdateTodo}>
        <input
          type="text"
          placeholder="Title of the Todo..."
          style={{ width: "415px" }}
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <br /><br />
        <textarea
          placeholder="Description of the Todo..."
          rows={5}
          cols={50}
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <br /><br />
        Status: Completed?
        <input
          type="radio"
          name="isDone"
          value={true}
          checked={isDone ? true: false}
          onChange={e => setIsDone(true)}
        /> Yes

        <input
          type="radio"
          name="isDone"
          value={false}
          checked={isDone ? false : true}
          onChange={e => setIsDone(false)}
        /> No
        <br /><br />
        <button type="submit">Update Todo</button>
      </form>
    </div>
  )
}

export default UpdateTodo;