import { useContext, useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header'
import { themes } from './themes/themes';
import { ThemeContext } from './context/ThemeContext';


function App() {

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    Object.assign(document.body.style, themes[theme]);
  }, [theme])

  return (
    <div>
      <Header />
    </div>

  )
}

export default App
