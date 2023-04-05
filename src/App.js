import { Routes, Route } from "react-router-dom";
import Home from './Components/Home'
import './App.css';


function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  );
}

export default App;
