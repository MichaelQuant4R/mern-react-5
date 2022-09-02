import Navbar from "./components/Navbar";
import {BrowserRouter} from "react-router-dom";
import { axiosInstance } from "./config";
import { useEffect } from "react";
import axios from "axios";

function App() {

  useEffect(() => {

    const fetchData = async () => {

      console.log("AXIOS INSTANCE");
      // console.log(axiosInstance);

      const res = await axiosInstance.get("/user/test");
  
      console.log("RES APP");
      console.log(res);
      console.log(res.status);
      console.log(res.statusText);
      console.log(res.data);
    }

    fetchData();


  },[]);


  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
