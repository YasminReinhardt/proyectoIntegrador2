const data = require('../data/data')
const db= require ('../database/models/index')

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
        let id= req.params.id
        db.Usuario.findByPk(id)
        .then (function(user){
            res.render ('profile', {
            usuarioLogueado: true,
            productos : data.productos,
            usuario : data.usuario
        })
        })
        .catch(function(err){
            console.log(err)
        })
    },
    edit: function (req,res){
        let id= req.params.id
        db.Usuario.findByPk(id)
        .then (function(user){
            res.render ('edit-profile', {
                productos : data.productos,
                usuarioLogueado: true,
                usuario : data.usuario,
        })
        })
        .catch(function(err){
            console.log(err)
        })

    },
    create: function(req,res){
        let {usuario,email,password,photo,birthdate,dni}=req.body
        //
        db.Usuario.create({
            usuario: req.body.usuario,
            email: req.body.email,
            password: req.body.password,
            photo: req.body.photo,
            birthdate: req.body.birthdate,
            dni:req.body.dni,
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
            res.redirect ('/users/profile' + id)
        })        
        .catch(function(err){
            console.log(err)
        })
    },
    
    





   // checkUser: function(req, res){
     //   let {email, password, rememberMe} = req.body
   //     db.Usuario.findOne({
    //        where:{
     //           email
    //        },
   //         raw:true
    //    })
    //    .then(function(user){
     //       let comparacionPassword = bcrypt.compareSync(password, user.password)
     //       if(comparacionPassword){
     //           req.session.user = {
     //               id: user.id,
     //               name: user.name,
     //               email:user.email
     //           }

      //          if(rememberMe === 'on'){
       //             res.cookie(
     //                   'rememberUser', 
      //                  {
     //                       id: user.id,
      //                      name: user.name,
       //                     email:user.email
      //                  },
       //                 {
       //                     maxAge: 1000 * 60 * 15
        //                }
        //            )
       //         }

                //En esta redirección estamos mandando la pk del usuario, pero
                //pronto no lo vamos a necesitar mas
                //res.redirect('/users/profile/' + user.id)
         //       res.redirect('/users/profile')
      //      }
     //   })
    //    .catch(function(err){
   //         console.log(err)
    //    })
  //  },
    
}
module.exports = userControl