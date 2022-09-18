import { FaTrash, FaBell } from 'react-icons/fa';

function Task({ task, onDelete, onToggle }) {
  return (
    // <div className="task" onDoubleClick={() => onToggle(task.id)}>
    <div className={`task ${task.reminder && 'reminder'}`}>
      <h3>
        {task.text} 
        <FaBell style={{ color: task.reminder?'black':'grey', cursor: 'pointer'}} onClick={() =>onToggle(task.id)} />
        <FaTrash style={{ color: 'black', cursor: 'pointer'}} onClick={() =>onDelete(task.id)} />
      </h3>
      <p>{task.day}</p>
      <p>{task.reminder}</p>
    </div>
  );
}

export default Task;
