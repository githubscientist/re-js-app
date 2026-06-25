import { DragDropProvider } from "@dnd-kit/react";
import { useEffect, useState } from "react";
import SortableItem from "./SortableItem";
import { isSortable } from "@dnd-kit/react/sortable";

const App = () => {

  const [items, setItems] = useState([
    { id:1, content: 'apple'},
    { id: 2, content: 'orange'},
    { id: 3, content: 'pineapple'},
    { id: 4, content: 'cherry'},
    { id: 5, content: 'watermelon'}
  ]);

  useEffect(() => {
    console.log(items);
  }, [items]);
  
  return (
    <div>
      <h1>Fruits</h1>

      <DragDropProvider
        onDragEnd={
          (event) => {
            if (event.canceled) return;

            const { source } = event.operation;

            if (isSortable(source)) {
              const { initialIndex, index } = source;

              if (initialIndex !== index) {
                setItems((items) => {
                  const newItems = [...items];

                  const [removed] = newItems.splice(initialIndex, 1);
                  newItems.splice(index, 0, removed);

                  return newItems;
                })
              }
            }
          }
        }
      >
        <ul>
        {
          items.map((item, index) => (
            <SortableItem
              key={item.id}
              id={item.id}
              index={index}
            >
              { item.content }
            </SortableItem>
          ))
        }
      </ul>
      </DragDropProvider>
    </div>
  )
}

export default App;