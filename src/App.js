import logo from './logo.svg';
import './App.css';
import Todo from "./components/GetTodos"
import MyData from "./components/PutReq";

function App() {
  return (
    <div className="App">
      <h4>ENV: {process.env.REACT_APP_URL}</h4>
      <Todo />
      {/* <MyData/> */}
    </div>
  );
}

export default App;
