module.exports= function(sequelize, dataTypes) {
    let alias= "Comentarios"
    let columnas= {
        id: {
            autoIncrement: true,
            primaryKey:true, 
            type: dataTypes.INTEGER,
        },
        texto: {
            type: dataTypes.TEXT
        }
    }
    let config= {
        tableName: "Comentarios", 
        timestap: true
    }
    const Comentarios= sequelize.define(alias,columnas,config)
//    Comentarios.associate= function (models){
  //      Comentarios.belongsTo(models.Productos, {
 //           as: "productos",
  //          foreignKey: "productos_id",
 //       })
 //   }
 //   Comentarios.associate= function (models){
 //       Comentarios.belongsTo(models.Usuarios, {
 //           as: "usuarios",
  //          foreignKey: "usuario_id",
 //       })
 //   }
    return Comentarios
}