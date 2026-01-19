import { useState } from "react";
import { Plus } from "lucide-react";

const TaskForm = ({ addTask }) => {
  const [newTask, setNewTask] = useState("");
  const [newPriority, setNewPriority] = useState(1);

  const handleSubmit = () => {
    // Check if the input is not just whitespace
    if (newTask.trim()) {
      // Call the addTask function with a new task object
      addTask({
        id: Date.now(), // Unique ID based on current timestamp
        text: newTask, // The task description entered by the user
        priority: newPriority, // User-defined priority (number)
        done: false, // New tasks start as not completed
      });

      // Clear the input fields after submitting
      setNewTask(""); // Reset task text input to empty
      setNewPriority(1); // Reset priority input to default value
    }
  };

  const inputStyle = {
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };

  return (
    <div>
      <div style={{ display: "flex", gap: "10px" }}>
        <input
          type="text"
          placeholder="Enter new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={{
            ...inputStyle,
            flexGrow: 1,
          }}
        />
        <input
          type="number"
          min="1"
          value={newPriority}
          onChange={(e) => setNewPriority(Number(e.target.value))}
          style={{
            ...inputStyle,
            width: "3.75rem",
          }}
        />
      </div>
      <button
        onClick={handleSubmit}
        style={{
          display: "block",
          margin: "20px auto 0",
          borderRadius: "50%",
          backgroundColor: "#007bff",
          color: "white",
          padding: "12px",
          border: "none",
          cursor: "pointer",
        }}
      >
        <Plus size={20} />
      </button>
    </div>
  );
};

export default TaskForm;
