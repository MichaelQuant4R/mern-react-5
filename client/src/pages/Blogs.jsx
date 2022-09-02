import React, {useEffect} from 'react'
import { axiosInstance } from '../config';

const Blogs = () => {

  useEffect(() => {

    const fetchData = async () => {

      console.log("AXIOS INSTANCE BLOG PAGE");
      // console.log(axiosInstance);

      const res = await axiosInstance.get("/blog/blogs");
  
      console.log("RES APP BLOG");
      console.log(res);
      console.log(res.status);
      console.log(res.statusText);
      console.log(res.data);
    }

    fetchData();


  },[]);


  return (
    <div id="blogs">Blogs</div>
  )
}

export default Blogs