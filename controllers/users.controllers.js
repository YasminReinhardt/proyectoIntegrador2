const data= require ('../data/data')

const userControl ={ 
    login: function (req,res){
        res.render ('login')
    },
    register: function (req,res){
        res.render ('register')
    },
    profile: function (req,res){
        res.render ('profile')
    },
    edit: function (req,res){
        res.render ('edit-profile')
    },
}
module.exports= userControl;