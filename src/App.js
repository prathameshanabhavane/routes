import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Error from './Components/Error';
import NavBar from './Components/NavBar';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
        <NavBar />
        <Routes>
          <Route path='' element={ <Home />} />
          <Route path='/about' element={ <About count={count} setCount={setCount} />} />
          <Route path='/blog' element={ <Blog />} />
          <Route path='/contact' element={ <Contact />} />
          <Route path='*' element={ <Error />} />
        </Routes>
    </div>
  );
}

export default App;
