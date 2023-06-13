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
            alloswNull:false,
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
        Usuarios.hasMany(models.Producto, {
            as: 'produ',
            foreignKey: 'usuario_id'
        }),
        
        Usuarios.hasMany(models.Comentarios, {
            as: 'comentarios',
              foreignKey: 'usuario_id',
              underscored:true
          })
    }
       
    
    return Usuarios
}
