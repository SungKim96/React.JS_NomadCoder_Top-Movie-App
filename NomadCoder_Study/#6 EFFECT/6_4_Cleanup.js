import {useEffect, useState}  from "react";

function Hello (){
  useEffect(() => {
    console.log("Hi :)");
    return () => console.log("Bye :(");
    });
  }, []);
  return 
      <h1>HELLO!</h1>
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((curr) => !curr)
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
