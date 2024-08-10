import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import blogFetch from "../../axios/config";
//css
import "./HomePage.css";

const HomePage = () => {

  //resgatando os dados dos posts da api json placeholder
  const [post,setPost] = useState([]);

  const getPost = async() => {
    try {
      
      const response = await blogFetch.get("/posts");
      const data = response.data;

      setPost(data);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getPost()
  },[]) // array vazio - executa apenas 1 vez

  return (
    <div className="home">
      <h1>Últimos posts</h1>
      {post.length === 0 ?  <p>Carregando...</p> : (
        post.map((post) => (
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to={`/posts/${post.id}`} className="btn">Ler Mais</Link>
          </div>
        ))
      ) }
    </div>
  )
}

export default HomePage
