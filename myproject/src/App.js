import Home from "./pages/Home";
import Kategori from "./pages/Kategori";
import Kundvagn from "./pages/Kundvagn";
import Loggain from "./pages/Loggain";
import Produktvy from "./pages/Produktvy";
import Underkonstruktion from "./pages/Underkonstruktion";


import Header from "./components/Header";

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import './App.css';

function App() {
  return (
      <div>
        <Router>
          <Header />
            <Routes>
              <Route  path="/" element={<Home />}/>
              <Route  path="/kategori" element={<Kategori />}/>
              <Route  path="/kundvagn" element={<Kundvagn />}/>
              <Route  path="/loggain" element={<Loggain />}/>
              <Route  path="/produktvy" element={<Produktvy />}/>
              <Route  path="/underkonstruktion" element={<Underkonstruktion />}/>

            </Routes>
        </Router>
      </div>
  );
};

export default App;
