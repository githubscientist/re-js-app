import { useState } from "react";
import Note from "./components/Note";

const App = () => {
  const [notes, setNotes] = useState([
    {
      "id": 1,
      "content": "React is a JS Framework",
      "favourite": false
    },
    {
      "id": 2,
      "content": "Conditional Rendering in React",
      "favourite": false
    },
    {
      "id": 3,
      "content": "State is a component's memory",
      "favourite": true
    }
  ]);

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {
          notes
            .map(note => {
              return <Note key={note.id} note={note} />
            })
        }
      </ul>
    </div>
  )
}

export default App;