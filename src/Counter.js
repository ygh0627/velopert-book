import { useReducer } from "react";

function reducer(state, action) {
  if (action.type === "INCREMENT") {
    return { value: state.value + 1 };
  }
  if (action.type === "DECREMENT") {
    return { value: state.value - 1 };
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, {
    value: 0,
  });
  return (
    <>
      <p>{state.value}</p>
      <div>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
      </div>
    </>
  );
}
export default Counter;
//화면에 읽기 전용 정보 전달을 위한 p태그 하나, 숫자 증감을 위한 버튼 2개.
