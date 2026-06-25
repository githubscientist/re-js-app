import { useSortable } from "@dnd-kit/react/sortable";

const SortableItem = ({ id, index, children }) => {
    const { ref } = useSortable({
        id, index
    });

  return (
      <li
          ref={ref}
          style={{
            cursor: "grab",
        }}
      >
        { children }
    </li>
  )
}

export default SortableItem;