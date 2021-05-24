import React, { useState, useEffect } from 'react';
import axios from 'axios';


// jsx
export default function App() {
  const [posts, setPosts] = useState([{ userId: 2, id: 102, title: "Animals", body: "Animals are nice" },
  { userId: 7, id: 107, title: "Programming", body: "focus to be a reliable programmer" }]);

  const [userId, setUserId] = useState()
  const [id, setId] = useState()
  const [title, setTitle] = useState()
  const [body, setBody] = useState()

  useEffect(() => {
    console.log('placholder posts');
    getData();
  }, []);

  const getData = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => {  
        setPosts(response.data);
      })
      .catch((err) => {
        console.log('ERR: ', err);
      });
  };

const addPost=()=>{
  const newPost=[{ userId:userId, id:id, title:title, body:body }]
setPosts([...posts,...newPost])
//we cant use push here because posts isnt a normal array 
//and push isnt a prototype for it
  // console.log(posts)
};

  return(<> 
  {/* {console.log(posts)} */}
  <div><h1>Blog App</h1></div>
{posts.map((elem,i)=>{
return<div key={i}> <h3>{elem.title} </h3>
<p>{elem.body}</p>
</div>
})} 
<input type="text" placeholder="user id" onChange={(e) => {
          setUserId(e.target.value);
        }}/>
<input type="text" placeholder="id" onChange={(e) => {
          setId(e.target.value);
        }}/>
<input type="text" placeholder="title" onChange={(e) => {
          setTitle(e.target.value);
        }}/>
<input type="text" placeholder="body" onChange={(e) => {
          setBody(e.target.value);
        }}/>

<button onClick={(addPost)}>click here!</button>
  </>)};