import { ACTIONS } from './Students';

const StudentList = ({ el, dispatch }) => {
  const { id, name, isHere } = el;
  return (
    <div>
      <span style={{ textDecoration: isHere ? 'line-through' : '', color: isHere? 'lightgrey': '' }}>
        {name}
      </span>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.delete, payload: id });  
        }}
      >
        삭제
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.toggle, payload: id });
        }}
      >
        수정
      </button>
    </div>
  );
};

export default StudentList;
