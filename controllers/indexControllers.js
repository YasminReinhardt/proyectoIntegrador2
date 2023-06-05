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
            ]
        })
        .then(function(data){

            console.log(data)
        })
        .catch(function(err){console.log(err)})

        res.render ('index', {
            productos: data.productos,
            //ahora podemos hacer un for en el index.ejs
            usuarioLogueado: false, // creo que va data.usuario 
            usuarios : data.usuario,
        }
        )
    }
}
module.exports= indexControl