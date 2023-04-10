const data= require ('../data/data')

const productosControl= {
    productos:function (req,res){
        res.render ('product' , {
            usuarioLogueado: true
        })
    },
    productosAdd:function (req,res){
        res.render ('product-add', {
            usuarioLogueado: true
        })
    },
    searchResults:function (req,res){
        res.render ('search-results', {
            usuarioLogueado: true
        })
    },
}
module.exports= productosControl