import React, { useState } from "react";
// import { PRIORITY_DEFAULT } from "../../constants/priorities";
import TodoFormFields from "../TodoFormFields/TodoFormFields";
import styles from "../../styles/TodoForm.module.css";

const TodoForm = ({ onCreate }) => {
  const [showAllFields, setShowAllFields] = useState(false);

  // Submit handler for the form.
  function handleSubmit(e) {
    e.preventDefault();

    const { elements } = e.target;

    if (!elements.name.value) {
      alert("Name is required");
      return;
    }

    onCreate({
      name: elements.name.value,
      description: elements.description.value,
      deadline: elements.deadline.value,
      priority: elements.priority.value,
      completed: false,
    });

    e.target.reset();
  }

  return (
    <section>
      <h2 className={styles.Title}>
        New To-Do
        <button
          className={styles.HideButton}
          onClick={() => setShowAllFields(!showAllFields)}
        >
          {showAllFields ? "Hide " : "Show "} Fields
        </button>
      </h2>

      {/* For update */}
      <form className={styles.Form} onSubmit={handleSubmit}>
        <TodoFormFields showAllFields={showAllFields} />
        <input type="submit" value="Add" />
      </form>
    </section>
  );
};

export default TodoForm;
