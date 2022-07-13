import NavBar from "../src/components/Navbar";
import { Container , Button } from "react-bootstrap";

import Kabupaten from "./pages/Kabupaten"
import Provinsi from "./pages/Provinsi"
import { Route, Routes} from "react-router-dom";



function App() {
    return (
      <Routes>
        <Route path="/" element={<Provinsi/>} />
        <Route path="/kabupaten" element={<Kabupaten/>} />
      </Routes>
      );
    }
export default App;
