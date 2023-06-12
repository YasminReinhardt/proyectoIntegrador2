const data = require('../data/data')
const db= require ('../database/models')

const indexControl= {
    index: function (req,res){
        let criterio ={
            include: 
                {association: 'usuarios'} //sacamos la association de los comentarios para que no rompa en el index
            ,
            // order:[
            //     ['created_at', 'DESC']
            // ], 
            // limit:10, 
        }
        db.Producto.findAll(criterio)
        .then(function(data){
            console.log(data)
        //    res.send(data)
            res.render ('index', {
                productos: data,
                usuarioLogueado: false, // creo que va data.usuario 
            }
            )
        })
        .catch(function(err){console.log(err)})


    },
    logout: function(req,res){
        res.session.user= undefined
        res.redirect('/')
    }
}
module.exports= indexControl