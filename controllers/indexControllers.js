const data = require('../data/data')
const db= require ('../database/models/index')

const indexControl= {
    index: function (req,res){
        db.Producto.findAll({
            raw: true,
            nest: true,
            include: [
                {association: 'usuarios'},
                {association: 'comentarios'}
            ],
            order:[
                ['created_at', 'DESC']
            ], 
            limit:10, 
        })
        .then(function(data){
            res.render ('index', {
                productos: data,
                usuarioLogueado: false, // creo que va data.usuario 
            }
            )
        })
        .catch(function(err){console.log(err)})


    },
    logout: function(req,res){
        
    }
}
module.exports= indexControl