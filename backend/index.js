const express = require('express')
const https = require('https')

const app = express();

app.get('/', (req, res) => {
    https.get('')
    res.send('lets get the weather data')
})
app.listen(3000, () => console.log('server running..'))