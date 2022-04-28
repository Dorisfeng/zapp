import Icon from "./components/Icons";
import TodoList from "./todoList";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Icon type="loading" />
      <TodoList />
    </div>
  );
}

export default App;
