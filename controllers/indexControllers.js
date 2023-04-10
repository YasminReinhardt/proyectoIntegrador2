const db = require ('../data/data')

const indexControl= {
    index: function (req,res){
        res.render ('index', {
            productos: db.productos,
            //ahora podemos hacer un for en el index.ejs
            usuarioLogueado: true // creo que va data.usuario 
        })


    }
}
module.exports= indexControl