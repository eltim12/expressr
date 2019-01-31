const postRoutes = require('./routes/post.js')

const express = require('express')
const app = express()
const session = require('express-session')
const port = 3000


app.set('view engine', 'ejs')
app.use(express.urlencoded({extends: false}))
app.use(express.static('./public'))
app.use(session({
    secret: 'rahasiaukyghgyu',
    cookie: {}
}))

app.use('/expressr', postRoutes)

app.get('/getSession', (req,res)=>{
    res.send(req.session)
})

// app.get('/setSession', (req,res)=>{
//     req.session.user = {
//         id: 1,
//         username: 'ilham'
//     }
//     res.send('login')
// })

app.get('/logout', (req,res)=>{
    req.session.destroy()
    res.send('logout')
})
app.listen(port, ()=> console.log(`Run ${port}`))

