import React, { useState } from 'react'
import './ComposePage.css'
import axios from 'axios'

function ComposePage() {
  const [header, setHeader] = useState('')
  const [image, setImage] = useState('')
  const [text, settext] = useState('')
  const [author, authorName] = useState('')
  const [titleImage, settitleImage] = useState('')

  const slugdata = header.replace(/[^a-zA-Z ]/g, "").toLocaleLowerCase()
  let date = new Date();
  date = date.toDateString()

  const blogObject = {
    slug: slugdata,
    key: header,
    headerKey: header,
    titleImage: titleImage,
    imagekey: image,
    textkey: text,
    authorkey: author,
    date: date
  }

  async function blogData(e) {
    e.preventDefault()
    try {
      await axios.post('http://localhost:4000/blog_data', {
        blogObject
      })
    } catch(err){
      console.log(err)
    }
  }
  return (
    <div>
        <h1>Compose</h1>
        <form onSubmit={blogData}>
          <div className="form-group">
             <label for="Header">Header</label>
             <input type="text" value={header} onChange={(e) => setHeader(e.target.value)} className="form-control" id="Header" aria-describedby="Header" placeholder="Header"/>
          </div>
          <div className="form-group">
             <label for="Image-link">Writer-image-link</label>
             <input type="text" value={image}  onChange={(e) => setImage(e.target.value)} className="form-control" id="Image-link" placeholder="Image-link"/>
          </div>
          <div className="form-group">
             <label for="Image-link">titleImage</label>
             <input type="text" value={titleImage}  onChange={(e) => settitleImage(e.target.value)} className="form-control" id="Image-link" placeholder="Image-link"/>
          </div>
          <div className="form-group">
              <label for="exampleInputPassword1">Text</label>
              <input type="text" value={text}  onChange={(e) => settext(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Text"/>
          </div>
          <div className="form-group">
              <label for="exampleInputPassword1">Author</label>
              <input type="text" value={author}  onChange={(e) => authorName(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Text"/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default ComposePage