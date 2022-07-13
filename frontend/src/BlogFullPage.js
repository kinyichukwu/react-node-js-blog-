import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Blog.css'
import './BlogFullPage.css'

function BlogFullPage() {
  const params = useParams()
  const {slug} = params
  let [blog, blogData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:4000/post_name').then(function(response) {
      let allblogs = response.data
      blogData(allblogs)
  
    })

  }, [])

  const particularBlog = blog.find(x => slug === x.slug)
  return particularBlog && (
    <div class="dark">
        <div class="container">
            <img src={particularBlog.titleImage} alt="" />
            <div class="content">
                <h1>{particularBlog.headerKey}</h1>
                <p>{particularBlog.textkey}</p>
            </div>
        </div>
    </div>
  )
}

export default BlogFullPage