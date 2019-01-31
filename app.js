const postRoutes = require('./routes/post.js')

const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({extends: false}))
app.use('/expressr', postRoutes)

app.listen(port, ()=> console.log(`Run ${port}`))

