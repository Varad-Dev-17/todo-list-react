import styles from "./App.module.css";
import TodoForm from "./components/TodoForm/TodoForm";
import { useState } from "react";
import TodoList from "./components/TodoList/TodoList";

const TODOS_DEFAULT = [
  {
    id: "1",
    name: "Buy an Ice Cream",
    description: "The white one with chocolate",
    deadline: "2025-02-09",
    priority: "low",
    completed: true,
  },
  {
    id: "2",
    name: "Sell old MacBook Pro 2025",
    description: "Try to sell it on OLX",
    deadline: "2025-02-28",
    priority: "high",
    completed: false,
  },
  {
    id: "3",
    name: "Charge Powerbank",
    description: "For the next travelling",
    deadline: "2025-02-15",
    priority: "medium",
    completed: false,
  },
  {
    id: "4",
    name: "Test Todo only with a name",
    description: "",
    deadline: "",
    priority: "none",
    completed: false,
  },
];

function App() {
  const [todos, setTodos] = useState(TODOS_DEFAULT);

  function handleCreation(newTodo) {
    setTodos((prev) => [...prev, { id: `${prev.length + 1}`, ...newTodo }]);
  }

  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img className={styles.Logo} src="/to-do.png" />
        <h2 className={styles.Title}>To-Do App</h2>
      </header>

      <div className={styles.AppContainer}>
        <TodoForm onCreate={handleCreation} />
        {/* {JSON.stringify(todos)} */}
        <TodoList todos={todos} />
      </div>
    </div>
  );
}

export default App;
