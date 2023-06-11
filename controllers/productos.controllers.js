const data = require('../data/data')
const db= require ('../database/models/index')
const bcrypt = require('bcryptjs')
let op = db.Sequelize.Op
const productosControl= {
    productos:function (req,res){
        db.Comentario.findAll({
            raw: true,
            nest: true,
            include: [
                {association: 'productos'},
            ]
        })
        .then(function(data){
            res.render('product', {
              usuarioLogueado: false,
              producto:data,
            })
         })
         .catch(function(err){
             console.log(err)
         })
       //cuando toca detalle de producto te lleve al corresponiente 
       let id= req.params.id
       db.Producto.findByPk(id, {
           raw:true
       })
       .then(function(data){
          res.render('product', {
            usuarioLogueado: false,
            producto:data,
          })
       })
       .catch(function(err){
           console.log(err)
       })
    },
    productosAdd:function (req,res){
        res.render ('product-add', {
           usuarioLogueado: true,
           usuario : data.usuario,
           productos: data.productos,
       })
   },
    searchResults:function (req,res){
        let busquedaUsuario= req.query.busqueda
        db.Producto.findAll({
            where:{
                nombre: {
                    [op.like]: '%${busquedaUsuario}%'
                }
            }, 
            raw:true,
        })
        .then(function(data){
            let encontroResultados
            
            if(data.length > 0){
                encontroResultados = true
            } else {
                encontroResultados = false
            }
            res.render ('search-results', {
                usuarioLogueado: false, 
                busqueda: busquedaUsuario,
                resultados: data,
                encontroResultados: encontroResultados
            }
            )
            })
            .catch(function(err){
                console.log(err)
            })

        },
    create: function(req,res){

        db.Producto.create({
            nombre: req.body.nombre, 
            descrpicion:req.body.descrpicion,
        })
        .then(function(data){
            res.redirect('/')
        })
        .catch(function(err){
            console.log(err)
        })
    },
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

    