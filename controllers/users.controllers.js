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
        db.Usuario.findByPk(id)
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
        db.Usuario.findByPk(id)
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
        let {usuario,email,password,photo,birthdate,dni}=req.body
        let passEncriptada = bcrypt.hashSync(password, 12)
        db.Usuario.create({
            usuario: usuario,
            email: email,
            password: passEncriptada,
            photo: photo,
            birthdate:birthdate,
            dni:dni,
        })
        .then (function(data){
            res.redirect ("/users/profile")
        })
        .catch(function(err){
            console.log(err)
        })
    }, 
    update: function (req,res){
        let id= req.params.id
        let {usuario,email}= req.body 
        db.Usuario.update({
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
    let {email, password, rememberMe} = req.body
        db.Usuario.findOne({
            where:{
                email: email
            },
            raw:true
        })
        .then(function(user){
         let comparacionPassword = bcrypt.compareSync(password, user.password)
            if(comparacionPassword){
                req.session.user={
                    id:user.id, 
                    usuario: user.usuario, 
                    email: user.email,
                }
                res.redirect ('/users/profile/')
             }

                if(rememberMe === 'on'){
                    res.cookie(
                       'rememberUser', 
                        {
                          id: user.id,
                          usuario: user.usuario,
                          email:user.email
                      },
                       {
                        maxAge: 1000 * 60 * 15
                       }
                    )
               }

                //res.redirect('/users/profile/' + user.id)
                res.redirect('/users/profile')
        }
        )
      },
      delete: function(req,res){
        let id= req.params.id
        db.Usuario.destroy({
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