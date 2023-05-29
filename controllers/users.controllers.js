const data = require('../data/data')
const db= require ('../database/models/index')

const userControl ={ 
    login: function (req,res){
        res.render ('login', {
            usuarioLogueado: false,
        })
    },
    register: function (req,res){
        res.render ('register', {
            usuarioLogueado: false
        }
        )
    },
    profile: function (req,res){
        res.render ('profile'
        , {
            usuarioLogueado: true,
            productos : data.productos,
            usuario : data.usuario
        })
    },
    edit: function (req,res){
        res.render ('edit-profile', {
            productos : data.productos,
            usuarioLogueado: true,
            usuario : data.usuario,
        })
    },
}
module.exports = userControl