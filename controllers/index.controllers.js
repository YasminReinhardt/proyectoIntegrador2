const data= require ('../db/data')

const indexControl= {
    index: function (req,res){
        res.render ('index', {
            productos: data.usuario
        })
    }
}
module.exports= indexControl