import React, { useState } from 'react'
import './ComposePage.css'
import axios from 'axios'

function ComposePage() {
  const [header, setHeader] = useState('')
  const [image, setImage] = useState('')
  const [text, settext] = useState('')

  const blogObject = {
    headerKey: header,
    imagekey: image,
    textkey: text
  }

  async function blogData(e) {
    e.preventDefault()
    try {
      await axios.post('http://localhost:4000/c', {
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
          <div class="form-group">
             <label for="Header">Header</label>
             <input type="text" value={header} onChange={(e) => setHeader(e.target.value)} class="form-control" id="Header" aria-describedby="Header" placeholder="Header"/>
          </div>
          <div class="form-group">
             <label for="Image-link">Image-link</label>
             <input type="text" value={image}  onChange={(e) => setImage(e.target.value)} class="form-control" id="Image-link" placeholder="Image-link"/>
          </div>
          <div class="form-group">
              <label for="exampleInputPassword1">Text</label>
              <input type="text" value={text}  onChange={(e) => settext(e.target.value)} class="form-control" id="exampleInputPassword1" placeholder="Text"/>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default ComposePage