import {useState}  from "react";

function App() {
  const [toDo, settoDo] = useState("");
  const [toDos, settoDos] = useState([]);
  const onChange = (event) => settoDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === ""){
      return;
  };

    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo('');
    console.log(toDos);
  };
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
        onChange={onChange}
        value={toDo}
        type="text"
        placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;
