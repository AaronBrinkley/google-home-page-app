import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyles';
import { Routes, Route } from 'react-router-dom';

import Images from './pages/Images';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        
      </Routes>
    </>
  );
}

export default App;
