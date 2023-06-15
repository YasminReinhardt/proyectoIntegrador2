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
            }
            )
        })
        .catch(function(err)
            {console.log(err)})


    },
    logout: function(req,res){
        req.session.user= undefined
        req.session.destroy()
        res.clearCookie('rememberUser')
        res.redirect('/')
    }
}
module.exports= indexControl