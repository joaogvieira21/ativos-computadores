const path = require('path')
const express = require('express')
const app = express()
const PORT = 2000
const router = require('./src/routes/router')

app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT)
})

app.use(express.static(path.join(__dirname, "./src/public" )))
app.use('/api', router)