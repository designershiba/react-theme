import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import { useSelector } from 'react-redux'
import Header from './components/Header';

function App() {
  const selectedTheme = useSelector((state) => state.changeTheme);
  return (
    <div className={`App ${selectedTheme}`}>
      <Header />
      <Home />
    </div>
  )
}

export default App
