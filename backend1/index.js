const express = require('express')

const app = express();

app.use(express.urlencoded({ extended: true}))
app.use(express.json())

app.post('c', async (req, res) => {
    const {blogData} = req.body
    console.log(blogData)
})

app.listen(4000, () => console.log('server running..'))