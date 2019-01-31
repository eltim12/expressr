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


router.get('/login', (req,res)=>{
    res.render('login')
})

router.post('/login', (req,res)=>{
    Model.User.findOne({
            username: req.body.username,
            password: req.body.password
    })
    .then(data=>{
        // console.log(typeof data)
        // res.send(data)
        if (data !== undefined) {
            res.redirect('/expressr')
        }
    })
    .catch(err=>{
        res.send(err)
    })
})

router.get('/', (req,res)=>{
    Model.User.findAll({
        order: [['createdAt']],
        include: {
            model: Model.Post
        }
    })
    .then(userpost=>{
        // res.send(userpost)
         Model.User.findAll({
            order: [['createdAt']],
            include: {
                model: Model.Comment,
                include: {
                    model: Model.Post
                }
            }
        })
        .then(usercomment=>{
            // res.send(usercomment)
            //  res.send(userpost)

            res.render('home', {data: userpost, datas: usercomment})
        })
        // res.render('home', {data: userpost})
    })
    .catch(err=>{
        res.send(err)
    })
})

router.get('/post' , (req,res)=>{
    // res.send('post')
    res.render('posting')
})

module.exports = router