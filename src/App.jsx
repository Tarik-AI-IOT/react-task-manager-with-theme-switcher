import { useContext, useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header'
import { themes } from './themes/themes';
import { ThemeContext } from './context/ThemeContext';
import Task from './components/Task/Task';
import Tasklist from './components/TaskList/TaskList';
import TimeZone from './components/Header/TimeZone';

function App() {
    const [taskList, setTaskList] = useState([]);
    const [inputTask, setInputTask] = useState({ title: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputTask.title.trim()) return;
        setTaskList(prev => [...prev, { id: crypto.randomUUID(), ...inputTask, completed: false }]);
        setInputTask({ title: '' });
    }

    const handleDelete = (deleteId) => {
        setTaskList(prev => prev.map(item => item.id === deleteId ? { ...item, deleting: true } : item));
        setTimeout(() => {
            setTaskList(prev => prev.filter(item => item.id !== deleteId));
        }, 400)
    };

    const handleComplete = (completedId) => {
        setTaskList(prev => prev.map(item => item.id === completedId ? { ...item, completed: !item.completed } : item));
    };


  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    Object.assign(document.body.style, themes[theme]);
  }, [theme])

  return (
    <div>
      <Header />
      <Task handleSubmit={handleSubmit} inputTask={inputTask} setInputTask={setInputTask} />
      <TimeZone />
      <Tasklist handleDelete={handleDelete} handleComplete={handleComplete} tasks={taskList} />
    </div>

  )
}

export default App
