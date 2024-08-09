import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//css
import "./HomePage.css";

const HomePage = () => {

  //resgatando os dados dos posts da api json placeholder
  const [post,setPost] = useState([]);

  const getPost = async() => {
    try {
      
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      const data = response.data;
      console.log(data);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getPost()
  },[]) // array vazio - executa apenas 1 vez

  return (
    <div>
      HomePage
    </div>
  )
}

export default HomePage
