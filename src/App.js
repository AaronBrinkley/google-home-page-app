import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyles';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Store from './pages/Store';
import Gmail from './pages/Gmail'

// This file imports all of our react componets for definition, placement, and routing
// '/' Is the only path that displays a full page but 
// Gets exported to index.js to be rendered on the DOM
function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/store' element={<Store/>} />
        <Route path='/gmail' element={<Gmail/>} />
      </Routes>
    </>
  );
}

export default App;
