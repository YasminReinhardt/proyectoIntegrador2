const data = require('../data/data')
const db= require ('../database/models/models')

const indexControl= {
    index: function (req,res){
        db.Producto.findAll(
            {
                include:[{association: 'comentarios', 
                        include:[{association: 'usuarios'}
                        ]},{association: 'usuarios'}], 
                order: [['created_at', 'DESC']],

            })
        .then(function(data){
            console.log(data)
          // res.send(data)
            res.render ('index', {
                productos: data,
                usuarioLogueado: false, // creo que va data.usuario 
            }
            )
        })
        .catch(function(err)
            {console.log(err)})


    },
    logout: function(req,res){
        req.session.user= undefined
        res.redirect('/')
    }
}
module.exports= indexControl