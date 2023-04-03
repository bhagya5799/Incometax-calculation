import { Routes, Route} from "react-router-dom";
import Home from './Components/Home'
import PersonDetails from './Components/PersonDetails'
import './App.css';
import Results from "./Components/Results";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Layout />}> */}
        <Route index element={<Home />} />
      <Route exact path="/results" element={< Results />} />
        {/* <Route path="*" element={<NoMatch />} /> */}
      {/* </Route> */}
    </Routes>
  );
}

export default App;
