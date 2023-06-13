const data = require('../data/data')
const db= require ('../database/models/models/index')
const bcrypt = require('bcryptjs')
const userControl ={ 
    login: function (req,res){
        res.render ('login', {
            usuarioLogueado: false,
        })
    },
    register: function (req,res){
        res.render ('register', {
            usuarioLogueado: false
        }
        )
    },
    profile: function (req,res){
        let id= req.session.user.id
        db.Usuarios.findByPk(id, {include:[
            {
                association: 'productos', 
                include:[
                    {association: 'comentarios'}
                ]
            }
        ]})
        .then (function(user){
            res.render ('profile', {
            usuarioLogueado: true,
            usuario : user
        })
        })
        //Hay un prpbllme con la ruta
        .catch(function(err){
            console.log(err)
        })
    },
    edit: function (req,res){
        let id= req.params.id
        db.Usuarios.findByPk(id)
        .then (function(user){
            res.render ('edit-profile', {
                usuarioLogueado: true,
                usuario : user,
        })
        })
        .catch(function(err){
            console.log(err)
        })

    },
    create: function(req,res){
        let {usuario,email,password,photo_url,birthdate,dni}=req.body
        let passEncriptada = bcrypt.hashSync(password, 12)
        db.Usuarios.create({
            usuario: usuario,
            email: email,
            password: passEncriptada,
            photo_url: photo_url,
            birthdate:birthdate,
            dni:dni,
        })
        .then (function(data){
            res.redirect ("/users/login")
            // if (email==user.email){
            //     res.send ("El email ya fue utilizado")
            // } else if (email==null){
            //     res.send("el campo esta vacio")
            // }
        })
        .catch(function(err){
            console.log(err)
        })

    }, 
    update: function (req,res){
        let id= req.params.id
        let {usuario,email}= req.body 
        db.Usuarios.update({
            usuario: usuario, 
            email: email
        }, {
            where:{
                id:id
            }
        })
        .then (function(data){
            res.redirect ('/users/profile/' + id)
        })        
        .catch(function(err){
            console.log(err)
        })
    },
    
    checkUser: function(req, res){
        let errors={}
        let {email, password, rememberMe} = req.body
            db.Usuarios.findOne({
                where:{
                    email: email
                },

            })
            .then(function(user){
            if (user !== null){
                let comparacionPassword = bcrypt.compareSync(password, user.password)
                if(comparacionPassword){
                    req.session.user={
                        id:user.id, 
                        usuario: user.usuario, 
                        email: user.email,
                    }
                    if(rememberMe === 'on'){
                        res.cookie('rememberUser', {
                                id: user.id,
                                usuario: user.usuario,
                                email:user.email
                            },{
                                maxAge: 1000 * 60 * 15
                            })
                        }
                            res.redirect ('/users/profile')
                        }else{
                            res.send('cLave erronea')
                        } 
                    } else {
                        errors.message = ('No existe ese usuario')
                        res.locals.errors=errors
                        return res.render('login')
                    }
                })
                .catch(function(error){
                    res.send(error)
                })
            },

    delete: function(req,res){
        let id= req.params.id
        db.Usuarios.destroy({
            where:{
                id:id
            }
        })
        .then (function(resp){
            res.redirect('/')
        })
        .catch(function(err){
            console.log(err)
        })
      }
    }
module.exports = userControl