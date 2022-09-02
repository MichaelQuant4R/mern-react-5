import Navbar from "./components/Navbar";
import {BrowserRouter} from "react-router-dom";
import { axiosInstance } from "./config";
import { useEffect } from "react";
import axios from "axios";

function App() {



  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
