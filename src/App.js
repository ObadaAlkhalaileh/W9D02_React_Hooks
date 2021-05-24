import React, { useState } from 'react';


// jsx
export default function App() {
  const [posts, setPosts] = useState([{ userId: 2, id: 102, title: "Animals", body: "Animals are nice" },
  { userId: 7, id: 107, title: "Programming", body: "focus to be a reliable programmer" }]);

  const [userId, setUserId] = useState()
  const [id, setId] = useState()
  const [title, setTitle] = useState()
  const [body, setBody] = useState()

  return(<> 
  {console.log(posts)}
  <div><h1>Blog App</h1></div>;
{posts.map((elem,i)=>{
return<div key={i}> <h3>{elem.title} </h3>
<p>{elem.body}</p>
<button>click here!</button>
<input type="text" placeholder="type here"/>
<input type="text" placeholder="type here"/>
<input type="text" placeholder="type here"/>
<input type="text" placeholder="type here"/>
 </div>
})
} 
  </>)};