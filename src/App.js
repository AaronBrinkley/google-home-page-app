import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Store from "./pages/Store";
import Gmail from "./pages/Gmail";
import Settings from "./pages/Settings";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Business from "./pages/Business";
import Advertising from "./pages/Advertising";

// This file imports all of our react componets for definition, placement, and routing
// '/' Is the only path that displays a full page but
// Gets exported to index.js to be rendered on the DOM
function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
        <Route path="/gmail" element={<Gmail />} />
        <Route path="/advertising" element={<Advertising />} />
        <Route path="/business" element={<Business />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
}

export default App;
