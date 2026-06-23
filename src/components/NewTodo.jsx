import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import instance from '../instances/instance';
import todoServices from "../services/todoServices";

const NewTodo = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isDone, setIsDone] = useState(false);

  const navigate = useNavigate();

  const handleCreateTodo = async (e) => {
    e.preventDefault();
    
    try {
      await todoServices.createTodo({
        title, description, isDone
      });
      alert('Todo created!');
      navigate('/dashboard/todos');
    } catch (error) {
      console.log(`Error creating new todo`, error);
    }
  }

  return (
    <div>
      <h3>New Todo</h3>
      <form onSubmit={handleCreateTodo}>
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
          onChange={e => setIsDone(true)}
        /> Yes

        <input
          type="radio"
          name="isDone"
          defaultChecked
          value={false}
          onChange={e => setIsDone(false)}
        /> No
        <br /><br />
        <button type="submit">Create Todo</button>
      </form>
    </div>
  )
}

export default NewTodo;