import React from "react";
import styles from "../styles/TodoForm.module.css";
const TodoForm = () => {
  // Submit handler for the form.
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const description = formData.get("description");
    const deadline = formData.get("deadline");
    const priority = formData.get("priority");

    console.log({ name, description, deadline, priority });
  }

  return (
    <section>
      <h2 className={styles.Title}>New To-Do</h2>

      <form className={styles.Form} onSubmit={handleSubmit}>
        <div className={styles.FormFields}>
          <div className={styles.FormField}>
            <input
              type="text"
              aria-label="Name*"
              placeholder="Name*"
              name="name"
              autoComplete="off"
            />
          </div>

          <div className={styles.FormField}>
            <textarea
              aria-label="Description"
              placeholder="Description"
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
        </div>

        <input type="submit" value="Add" />
      </form>
    </section>
  );
};

export default TodoForm;
