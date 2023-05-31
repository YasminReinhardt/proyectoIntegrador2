module.exports= function(sequelize, dataTypes) {
    let alias= "Productos"
    let columnas= {
        id: {
            autoIncrement: true,
            primaryKey:true, 
            type: dataTypes.INTEGER,


        },
        nombre: {
            type: dataTypes.STRING, 
            alloswNull:true,
        },
        descrpicion: {
            type: dataTypes.TEXT
        }

    }
    let config= {
        tableName: "Productos", 
        timestap: true
    }
    const Productos= sequelize.define(alias,columnas,config)
    Productos.associate= function(models){
        Productos.belongsTo(models.Usuarios, {
            as: 'usuarios',
            foreignKey: 'usuario_id'
        })
    }
 //   Productos.associate= function (models){
  //      Productos.hasMany(models.Comentarios, {
  //          as: "comentarios",
 //           foreignKey: "productos_id",
  //      })
  //  }

    return Productos
}