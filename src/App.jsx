import { useContext, useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header'
import { themes } from './themes/themes';
import { ThemeContext } from './context/ThemeContext';
import Task from './components/Task/Task';

function App() {
    const [taskList, setTaskList] = useState([]);
    const [inputTask, setInputTask] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        setTaskList(prev => [...prev, inputTask]);
        setInputTask({});
    }

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    Object.assign(document.body.style, themes[theme]);
  }, [theme])

  return (
    <div>
      <Header />
      <Task handleSubmit={handleSubmit} inputTask={inputTask} setInputTask={setInputTask} />
    </div>

  )
}

export default App
