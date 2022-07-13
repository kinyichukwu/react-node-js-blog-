import React from "react";
import { Link } from "react-router-dom";

function Post({title, writersimage, name, titleImage, slug, date}) {
    return (
        <Link to={`BlogFullPage/${slug}`} style={{textDecoration: 'none'}}>
        <div className="post">
                <img src={titleImage} alt="bx" />
                 <div className="postData">
                     <h3>{title}</h3>
                    <div className="postWriter">
                         <span className="postWriter">
                             <img src={writersimage} alt='ghgf' />
                             <span>{name}</span>
                         </span>       
                     <span>{date}</span>
                 </div>
             </div>
           </div>
        </Link>
    )
}
export default Post;
