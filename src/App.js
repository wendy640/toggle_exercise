
import { useState } from 'react';
import './App.css';
import Main from './Outline/Main';
import Navbar from './Outline/Navbar';

function App() {
  const [darkMode,setDarkMode]=useState(false)
  function toggleDarkMode() {
		setDarkMode((prevState) => !prevState)
	}
  return (
		<div className="container">
			<Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
			<Main darkMode={darkMode} />
		</div>
	)
}

export default App;
