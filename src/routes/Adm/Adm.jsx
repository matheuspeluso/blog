import blogFetch from "../../axios/config";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Adm.css"

const Adm = () => {

    const [posts,setPosts] = useState([]);

    const getPost = async() => {
    try {
      
      const response = await blogFetch.get("/posts");
      const data = response.data;

      setPosts(data);

    } catch (error) {
      console.log(error);
    }
  };

  //simulando uma requisição delete 
  const deletePost = async(id) => {
    await blogFetch.delete(`/posts/${id}`) // quando atualizar o site vai voltar pois como se trata de uma api de teste

    //exlcuindo do dom
    const filteredPosts = posts.filter((post) => post.id !== id);

    setPosts(filteredPosts);
  }


  useEffect(() => {
    getPost()
  },[])

  return (
    <div className="admin">
      <h1>Gerenciar Posts</h1>
      {posts.length === 0 ? <p>Carregando...</p> : (
        posts.map((post) =>(
            <div className="post" key={post.id}>
                <h2>{post.title}</h2>
                <div className="actions">
                    <Link className="btn edit-btn">Editar</Link>
                    <button className="btn delete-btn" onClick={() => deletePost(post.id)} >Excluir</button>
                </div>
            </div>
        ))
      )}
    </div>
  )
}

export default Adm
