import React, { useState,useEffect } from 'react'
import axios from "axios"
const PostP = () => {
  const [posts, setPosts] = useState([]); 

 useEffect(()=>{
    axios.get("http://localhost:3000/posts").then((res)=>{
        console.log(res);
        setPosts(res.data.posts)
    })
 },[])

  return (
    <section className='post-collection'>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id} className='post-card'>
            <img src={post.image} alt={post.caption} />
            <p>{post.caption}</p>
          </div>
        ))
      ) : (
        <h1 className="no-post">No Posts Available</h1>
      )}
    </section>
  )
}

export default PostP