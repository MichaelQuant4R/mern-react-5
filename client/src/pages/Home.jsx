import React, {useEffect} from 'react'
import { axiosInstance } from '../config';

const Home = () => {

  useEffect(() => {

    const fetchData = async () => {

      console.log("AXIOS INSTANCE HOME PAGE");
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
    <div>Home</div>
  )
}

export default Home