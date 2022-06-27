import React from 'react'
import './ComposePage.css'

function ComposePage() {
  return (
    <div>
    <h1>Compose</h1>
    <form>
    <div class="form-group">
      <label for="Header">Header</label>
      <input type="text" class="form-control" id="Header" aria-describedby="Header" placeholder="Header"/>
    </div>
    <div class="form-group">
      <label for="Image-link">Image-link</label>
      <input type="text" class="form-control" id="Image-link" placeholder="Image-link"/>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Text</label>
      <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Text"/>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form></div>
  )
}

export default ComposePage