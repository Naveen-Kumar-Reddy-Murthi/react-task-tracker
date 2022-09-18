import Task from "./Task";
function Tasks({ tasks, onDelete, onToggle }) {
  return (
    <>
      {tasks.map(task => (
        <Task className="h3" key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}>
          {task.text}
        </Task>
      ))}
    </>
  );
}

export default Tasks;
