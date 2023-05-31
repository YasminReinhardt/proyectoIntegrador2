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
        res.render ('profile'
        , {
            usuarioLogueado: true,
            productos : data.productos,
            usuario : data.usuario
        })
    },
    edit: function (req,res){
        res.render ('edit-profile', {
            productos : data.productos,
            usuarioLogueado: true,
            usuario : data.usuario,
        })
    },
   // checkUser: function(req, res){
     //   let {email, password, rememberMe} = req.body
   //     db.Usuarios.findOne({
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