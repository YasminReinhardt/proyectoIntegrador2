module.exports= function(sequelize, dataTypes) {
    let alias= "Usuarios"
    let columnas= {
        id: {
            autoIncrement: true,
            primaryKey:true, 
            type: dataTypes.INTEGER,


        },
        usuario: {
            type: dataTypes.STRING, 
            alloswNull:true,
        },
        email: {
            type: dataTypes.STRING, 
            alloswNull:true,
            uniqueKey: true,
        }, 
        password: {
            type: dataTypes.STRING, 
            alloswNull:true,
        }, 
        dni: { 
            type: dataTypes.STRING, 
            alloswNull:true,
            uniqueKey: true,

        }, 
        photo_url: {
            type: dataTypes.STRING, 
        }, 
        birthdate: {
            type: dataTypes.DATE,
            alloswNull:true
        }
    }
    let config= {
        tableName: "usuarios", 
        timestamps: false,
        underscored: true
    }
    const Usuarios= sequelize.define(alias,columnas,config)
    Usuarios.associate= function(models){
        Usuarios.hasMany(models.Productos, {
            as: 'productos',
            foreignKey: 'usuario_id'
        })
    }
    Usuarios.associate= function(models){
        Usuarios.hasMany(models.Comentarios, {
          as: 'comentarios',
           foreignKey: 'usuario_id'
        })
    }
    return Usuarios
}
