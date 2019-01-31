const router = require('express').Router()
const Model = require('../models')

// router.get('/', (req,res)=>{
//     // res.render('home')
//     Model.Post.findAll({
//         order: [['id']]
//     })
//     .then(data=>{
//         res.render('home', {data})
//     })
//     .catch(err=>{
//         res.send(err)
//     })
// })


router.get("/register", (req, res) => {
            res.render('register')
})

router.post("/register", (req, res) => {
    console.log(req.body)
    Model.User.create({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
    })
        .then(data => {
            // res.send(data)
            res.redirect("login")
        })
        .catch(err => {
            res.send(err.errors[0].message)
        })
})

router.get("/editAccount", (req, res) => {
    Model.User.findByPk(1)
        .then(data => {
            // res.send(data)
            res.render("editAccount", { data })
        })
        .catch(err => {
            res.send(err)
        })
})

router.post("/editAccount", (req, res) => {
    // console.log(req.body.firstName)
    // console.log(req.params.id)
    
    Model.User.update({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    },
        {
            where: {
                id: 1
            }
        })
        .then(updated => {
            res.redirect('/expressr')
            // res.send(updated)
        })
        .catch(err => {
            res.send(err.errors[0].message)
        })
})


router.get('/login', (req, res) => {
    res.render('login')
})

router.post('/login', (req, res) => {
    Model.User.findOne({
        where: {
            username: req.body.username,
            password: req.body.password
        }
    })
        .then(data => {
            // console.log(typeof data)
            // res.send(data)
            if (data !== undefined && data !== null) {
                res.redirect('/expressr')
            } else {
                res.redirect('/expressr/login')
            }
        })
        .catch(err => {
            res.send(err)
        })
})
     


// router.get('/', (req, res) => {
//     Model.User.findAll({
//         order: [['createdAt']],
//         include: {
//             model: Model.Post
//         }
//     })
//         .then(userpost => {
//             // res.send(userpost)
//             Model.User.findAll({
//                 order: [['createdAt']],
//                 include: {
//                     model: Model.Comment,
//                     include: {
//                         model: Model.Post
//                     }
//                 }
//             })
//                 .then(usercomment => {
//                     // res.send(usercomment)
//                      res.send(userpost)

//                     // res.render('list', { data: userpost, datas: usercomment })
//                 })
//             // res.render('home', {data: userpost})
//         })
//         .catch(err => {
//             res.send(err)
//         })
// })

router.get('/', (req,res)=>{
    Model.Post.findAll({
        order: [['id','DESC']]
    })
            .then(data=>{
                Model.User.findAll({
                    include: {
                        model: Model.Post
                    }
                })
                .then(datas=>{
                    // res.send(datas)
                // res.send(data)
                res.render('list', {data , datas})
                })
                
            })
            .catch(err=>{
                res.send(err)
            })
    // res.render('beranda')
})

router.post('/' , (req,res)=>{
    // res.send('post')
    let obj = {
        content: req.body.content,
        like: 1,
        UserId: 1
    }
    // res.render('posting')
    Model.Post.create(obj)
    .then(data=>{
        res.redirect('/expressr')
    })
    .catch(err=>{
        res.send(err)
    })
})

module.exports = router

