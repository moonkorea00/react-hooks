import { useState, useReducer } from 'react';
import StudentList from './StudentList';
import { MdDone, MdDelete } from 'react-icons/md';

export const ACTIONS = {
  create: 'create',
  delete: 'delete',
  toggle: 'toggle',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.create:
      console.log(state);
      return {
        count: state.count + 1, // 현재 count에 + 1
        students: [
          ...state.students,
          { id: Date.now(), name: action.payload, isHere: false },
        ],
      };
    case ACTIONS.delete:
      return {
        count: state.count - 1,
        students: state.students.filter(el => el.id !== action.payload),
      };
    case ACTIONS.toggle:
      return {
        count: state.count,
        students: state.students.map(el =>
          el.id === action.payload ? { ...el, isHere: !el.isHere } : el
        ),
      };
  }
};

const initialState = {
  count: 1,
  students: [{ id: Date.now(), name: 'dan', isHere: false }],
};
const Students = () => {
  const [name, setName] = useState('');
  const [studentsInfo, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div
        style={{
          border: '1px solid black',
          borderRadius: '16px',
          width: '32px',
          height: '32px',
          display: 'flex',
          justifyContent: 'center',
          alignItems:'center'
        }}
      >
        <MdDone />
      </div>
      <MdDelete />
      <h1>출석부</h1>
      <p>총 학생 수: {studentsInfo.count}</p>
      <input
        type="text"
        placeholder="이름을 입력하세요"
        name="name"
        onChange={e => {
          setName(e.target.value);
        }}
        value={name}
      />
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.create, payload: name });
        }}
      >
        추가
      </button>
      <div>
        {studentsInfo.students.map(el => {
          return (
            <StudentList
              el={el}
              name={el.name}
              key={el.id}
              dispatch={dispatch}
              id={el.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default Students;
