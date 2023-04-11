const data = require('../data/data')
const productosControl= {
    productos:function (req,res){
       res.render ('product' , {
            usuarioLogueado: true,
            productos: data.productos,
       })
    },
    productosAdd:function (req,res){
        res.render ('product-add', {
           usuarioLogueado: true,
           usuarios : data.usuario,
           productos: data.productos,
       })
   },
    searchResults:function (req,res){
        res.render ('search-results', {
           usuarioLogueado: true
        })
    }
}
///const productosControl = {
   // index: function(req, res){
     //   res.render("product", {
       //     productos : data.productos,
         //   usuarioLogueado: true, //true o false
           // usuario : data.usuario,
        //})
    //},
    //detail: function(req, res){
      //  res.render("product-add" ,{
        //productos : data.productos,
        //usuarioLogueado: true, //true o false
        //usuario : data.usuario,
        //})
   // }


module.exports= productosControl


//const productosControl= {
    //productos:function (req,res){
       // res.render ('product' , {
           // usuarioLogueado: true
       // })
   // },
   // productosAdd:function (req,res){
       // res.render ('product-add', {
          //  usuarioLogueado: true
       //})
   // },
    //searchResults:function (req,res){
        //res.render ('search-results', {
      //      usuarioLogueado: true
        //})
    //}

    