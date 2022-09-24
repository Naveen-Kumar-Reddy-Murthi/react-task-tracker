import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  const [showAddTask, setShowAddTask] = useState(true);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();
    console.log(data);
    return data;
  };

  const fetchTask = async id => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    console.log(data);
    return data;
  };
  const addTask = async task => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    setTasks([...tasks, data]);
    // const id = Math.floor(Math.random()*100)+1;
    // const newTask = {id, ...task}
    //setTasks([...tasks, newTask]);
  };

  const deleteTask = async id => {
    console.log('delete clicked', id);
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    });
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleReminder = async id => {
    const taskToToggle = await fetchTask(id);
    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(updatedTask),
    });

    const data = await res.json();
    setTasks(tasks.map(task => (task.id === id ? { ...task, reminder: data.reminder } : task)));
  };

  return (
    <Router>
      <div className="container">
        <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />

        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                    {showAddTask && <AddTask onAdd={addTask} />}
                    {tasks.length > 0 ? (
                      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
                    ) : (
                      <h3 className="task">No Tasks to show</h3>
                    )}
                  </>
                }
               />
          <Route path="/about" element={About()} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
