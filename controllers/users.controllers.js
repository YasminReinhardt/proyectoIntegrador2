const data = require('../data/data')
const db= require ('../database/models/models/index')
const bcrypt = require('bcryptjs')
const userControl ={ 
    login: function (req,res){
        if (req.session.user){
            res.redirect('/')
        }else{
            res.render ('login')
        }

    },
    register: function (req,res){
        if (req.session.user){
            res.redirect('/')
        }else{
            res.render ('register')
        }
    },
    profile: function (req,res){
        // let id = req.session.user.id
        let id = req.params.id
        db.Usuarios.findByPk(id, {include:
            [
            {
                association: 'productos', 
                include:[
                    {association: 'comentarios'}
                ]
            }
        ]})
        .then (function(user){
            res.render ('profile', {
            usuario : user
        })
        console.log(data)
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
        if ((password== '') || (password.length < 4) || (email == '')){
            let errors= {}
            if (password ==''){
                errors.message= "debes ingresar una contrasenia"
            }else if (password.length <4){
                errors.message= "debes ingresar una contrasenia con mas de 4 caracteres"
            }else if(email == ''){
                errors.message= "Debes ingresar un email."
            } 
            res.locals.errors=errors
            res.render('register')

        }else{
            db.Usuarios.findOne({
                where: {
                    email:email
                }
            })
       
        .then(function(data){
            if (data){
                let errors = {}
                errors.message = "Ya existe un usuario con ese email"
                res.locals.errors=errors
                res.render('register')
            }else{
                let passEncriptada = bcrypt.hashSync(password, 12);
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
   
            })
            .catch(function(err){
                console.log(err)
            })

            }
        })
        .catch(function(err){
            console.log(err)
        })
            
        } 
    }, 
    update: function (req,res){
        let id= req.params.id
        let {usuario,email,birthdate,dni,password,passwordNueva}= req.body 
        db.Usuarios.findByPk(id)
        .then(function(data){
            let comparacionPassword = bcrypt.compareSync(password, data.password)

            if (comparacionPassword){
                req.session.user={ 
                    id: id, 
                    usuario: usuario, 
                    email: email
                }
                db.Usuarios.update({
                    usuario: usuario, 
                    email: email,
                    birthdate:birthdate, 
                    dni:dni, 
                    passwordNueva:passwordNueva
                }, {
                    where:{
                        id:id
                    }
                })
                .then (function(data){
                    res.redirect (`/users/profile/${id}`)
                }) 
            } else {
                let errors = {}
                errors.message= "debes ingresar una contrasenia"

            }
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
                         res.redirect ('/')
                        }else{
                            let errors = {}
                            errors.message = ('Clave incorrecta')
                            res.locals.errors=errors
                            return res.render('login')
                        } 
                    } else {
                        let errors = {}
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