import React, { useState } from 'react';


// jsx
export default function App() {
  const [posts, setPosts] = useState([{ userId: 2, id: 102, title: "Animals", body: "Animals are nice" },
  { userId: 7, id: 107, title: "Programming", body: "focus to be a reliable programmer" }]);

  return(<> 
  {console.log(posts)}
  <div><h1>Blog App</h1></div>;
{posts.map((elem,i)=>{
return<div> <h3 key={i}>{elem.title} </h3>
<p>{elem.body}</p> </div>
})
} 
  </>)};