import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const UpdateTodo = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
    const [isDone, setIsDone] = useState(false);
    const { id } = useParams();

    const navigate = useNavigate();
    
    useEffect(() => {
        axios
            .get(`https://6a3403ef8248ee962fa4f20a.mockapi.io/todos/${id}`)
            .then(response => {
                setTitle(response.data.title);
                setDescription(response.data.description);
                setIsDone(response.data.isDone);
            })
    }, []);

  const handleUpdateTodo = (e) => {
    e.preventDefault();
    
    // make an api call to create a new todo in the server
      axios
          .put(`https://6a3403ef8248ee962fa4f20a.mockapi.io/todos/${id}`, {
              title, description, isDone
          })
          .then(() => {
              alert('Todo updated!');

              navigate('/dashboard/todos');
          });
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