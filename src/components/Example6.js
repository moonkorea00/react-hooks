// import { useReducer } from "react"

// const Example6 = () => {
//   const [state, dispatch] = useReducer(reducer, {count : 0})
//   // useReducer는 reducer라는 함수와 state의 초기값을 받는다
//   // state를 변경하는 로직이 담겨 있는 함수
//   const reducer = (state, action) =>{
//     if(action.type === 'PLUS'){
//       return { count: state.count + 1}
//     } return newState
//   // state는 previous state, action은 state에 조작을 가미하려는 객체
//   // action이 발생하면 newState 반환
//   // dispatch => action 객체를 넣어서 실행
//   // action객체를 주는게 dispatch라는 함수
//   // action => 객체이고 필수 프로퍼티로 type을 가진다
//   }
//   // dispatch
//   const click = () =>{ dispatch({type: 'PLUS'})}
//   return (
//     <div>
//     <p>you clicked {count} times</p>
//     <button onClick={click}>click me</button>
//   </div>
//   )
// };

// export default Example6