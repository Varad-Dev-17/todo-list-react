import React, { useState } from "react";
import styles from "../../styles/TodoForm.module.css";
// todo-list-react\src\styles\TodoForm.module.css

const TodoForm = ({ onCreate }) => {
  const [showAllFields, setShowAllFields] = useState(false);

  // Submit handler for the form.
  function handleSubmit(e) {
    e.preventDefault();

    const { elements } = e.target;

    if (
      !elements.name.value ||
      !elements.description.value ||
      !elements.deadline.value ||
      !elements.priority.value
    ) {
      alert("All fields are required");
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

      <form className={styles.Form} onSubmit={handleSubmit}>
        <div className={styles.FormFields}>
          <div className={styles.FormField}>
            <input
              type="text"
              aria-label="Name*"
              placeholder="Enter Task Name..."
              name="name"
              autoComplete="off"
            />
          </div>

          {showAllFields && (
            <>
              <div className={styles.FormField}>
                <textarea
                  aria-label="Description"
                  placeholder="Enter Task Description..."
                  name="description"
                  rows="3"
                />
              </div>

              <div className={styles.FormGroup}>
                <div className={styles.FormField}>
                  <label htmlFor="deadline">Deadline</label>
                  <input type="date" id="deadline" name="deadline" />
                </div>

                <div className={styles.FormField}>
                  <label htmlFor="priority">Priority</label>
                  <select defaultValue="none" id="priority" name="priority">
                    <option value="none">None</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>
              </div>
            </>
          )}
        </div>

        <input type="submit" value="Add" />
      </form>
    </section>
  );
};

export default TodoForm;
