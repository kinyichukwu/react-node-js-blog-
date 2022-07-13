// Blog.js
import React, { useEffect, useState } from 'react'
import './Blog.css'
import { Link } from "react-router-dom";
import axios from 'axios';
import Post from './Post';

// remaining routing pages and maping through pages


function Blog() {
//check this code
let [blog, blogData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:4000/post_name').then(function(response) {
      let allblogs = response.data
      blogData(allblogs)
  
    })

  }, [])
console.log(blog)
//check this code

  return (
    // the blog's homepage will be created here
    <div>      
      <div className="dark">
        <div className="container">
           <h1>My Blog</h1>
           <div className="blogPost">   
           {blog.map(x => <Post key={x.headerKey} title={x.headerKey} writersimage={x.imagekey} titleImage={x.titleImage} slug={x.slug} name={x.authorkey} date={x.date}/>)}
            </div>     
            <Link to="/ComposePage" style={{textDecoration: 'none', color: 'gray', margin: '0 auto'}}>Compose</Link>
        </div>
      </div>
    </div>
  )
}

export default Blog