const data = require('../data/data')
const db= require ('../database/models/models/index')
const bcrypt = require('bcryptjs')
let op = db.Sequelize.Op
const productosControl= {
    productos:function (req,res){
        let id= req.params.id
        db.Producto.findByPk(id, {
            include: [
                {
                    association: 'comentarios',
                    include:[
                        {association: 'usuarios'}
                    ] 
                },
                {
                    association: 'usuarios',
                    include:[
                        {association: 'produ'}
                    ] 
                }           
             ],

        })
        .then(function(data){
            res.render('product', {
              producto:data,
            })
           // res.send(data)
         })
         .catch(function(err){
             console.log(err)
         })
       //cuando toca detalle de producto te lleve al corresponiente 
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
                    [op.like]: `%${busquedaUsuario}%`}
            }, 
            include: [
                {association: "usuarios"}, 
                {association: "comentarios"},
            ], 
            // order: [['created_at', 'DESC']],
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
    addComment: function(req,res){
        if (req.session.user){
           let comment= 
        {       productos_id: req.params.id, 
                usuario_id: req.session.user.id, 
                texto: req.body.comentario}
            db.Comentarios.create(comment)
                return res.redirect(`/productos/product/${id}`)
        }
            else {
                return res.redirect('users/login')
            }
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

    