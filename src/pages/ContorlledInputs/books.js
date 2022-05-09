import { ACTION } from "./ControlledInputs";

const Books = ({ book, dispatch }) => {
  const { title, body, isRead, id } = book;
  // console.log(book);

  return (
    <>
      <div>
        <span style={{ textDecoration: isRead ? 'line-through' : '' }}>
          title: {title} info: {body}
        </span>
        <button
          onClick={()=>dispatch({
            type: ACTION.toggle,
            payload: id
          })}
        >
          toggle
        </button>
        <button
        onClick={()=>dispatch({
          type: ACTION.delete, payload: id
        })}
        >delete</button>
      </div>
    </>
  );
};

export default Books;
