import { useReducer } from "react";

const initialState = {
  status: "idle",
  data: [],
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, status: "loading" };
    case "FETCH_SUCCESS":
      return { status: "success", data: action.payload, error: null };
    case "FETCH_ERROR":
      return { status: "error", data: [], error: action.error };
    default:
      return state;
  }
}

export default function Bai6_Fetch() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchUsers = async () => {
    dispatch({ type: "FETCH_START" });

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();

      dispatch({ type: "FETCH_SUCCESS", payload: data });
    } catch (err) {
      dispatch({ type: "FETCH_ERROR", error: err.message });
    }
  };

  return (
    <div>
      <h2>Bài 6 - Fetch</h2>

      <button onClick={fetchUsers}>Load</button>

      {state.status === "loading" && <p>Loading...</p>}
      {state.status === "error" && <p>Error: {state.error}</p>}
      {state.status === "success" &&
        state.data.map((u) => <p key={u.id}>{u.name}</p>)}

      <button onClick={fetchUsers}>Retry</button>
    </div>
  );
}
