// Blog.js
import React from 'react'
import './Blog.css'
import { Link } from "react-router-dom";
function Blog() {
  return (
    // the blog's homepage will be created here
    <div>      
      <div class="dark">
        <div class="container">
           <h1>My Blog</h1>
           <div class="blogPost">
           <Link to="/BlogFullPage" style={{textDecoration: 'none'}}>
           <div class="post">
                   <img src="https://th.bing.com/th/id/R.9d385be887db35285e3479a091424314?rik=Rw7Rq9poX%2f89TQ&riu=http%3a%2f%2fimages.unsplash.com%2fphoto-1590523278191-995cbcda646b%3fixlib%3drb-1.2.1%26q%3d80%26fm%3djpg%26crop%3dentropy%26cs%3dtinysrgb%26w%3d1080%26fit%3dmax%26ixid%3deyJhcHBfaWQiOjEyMDd9&ehk=Nhds%2fiJghhi7s0gtqsMc9Xh64znF2FqCxLo1GPcJHrU%3d&risl=&pid=ImgRaw&r=0" alt="fkdn" />
                    <div class="postData">
                        <h3>A brief intro to Blogging</h3>
                       <div class="postWriter">
                            <span class="postWriter">
                                <img src="https://th.bing.com/th/id/R.e23347f42791d96382c324ab2106fe28?rik=eKsAGn2wlwO3Iw&riu=http%3a%2f%2fimages.unsplash.com%2fphoto-1588001832198-c15cff59b078%3fixlib%3drb-1.2.1%26q%3d80%26fm%3djpg%26crop%3dentropy%26cs%3dtinysrgb%26w%3d1080%26fit%3dmax%26ixid%3deyJhcHBfaWQiOjEyMDd9&ehk=uMyCsXA5FnLVF6kV7vaslYUqW%2bHCYu2tg8UJq7Y7zv0%3d&risl=&pid=ImgRaw&r=0" alt="gs" />
                                <span>Edwin</span>
                            </span>       
                        <span>April 6, 2022</span>
                    </div>
                </div>
              </div>
           </Link>
              
            </div>     
            <Link to="/ComposePage" style={{textDecoration: 'none', color: 'gray', margin: '0 auto'}}>Compose</Link>
        </div>
      </div>
    </div>
  )
}

export default Blog