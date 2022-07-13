const express = require("express")
const app = express()
const cors = require('cors')
const allBlogs = []


app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())


app.get('/', cors(), async (req, res) => {
    res.send('worling')
})

app.post('/blog_data', async (req, res) => {
    let {blogObject} = req.body
    allBlogs.push(blogObject)
    console.log(blogObject)
    
})

app.get('/post_name', cors(), async (req, res) => {
    res.send(allBlogs)
})

// app.get('/pos')

app.listen(4000, () => console.log('tfc'))