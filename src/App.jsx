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
        setTaskList(prev => [...prev, inputTask]);
        setInputTask({ title: '' });
    }

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    Object.assign(document.body.style, themes[theme]);
  }, [theme])

  return (
    <div>
      <Header />
      <Task handleSubmit={handleSubmit} inputTask={inputTask} setInputTask={setInputTask} />
      <TimeZone />
      <Tasklist tasks={taskList} />
    </div>

  )
}

export default App
