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
        }, 
        
        created_at: {
            type:dataTypes.DATE,
            allowNull: true,
        },
        updated_at: {
            type:dataTypes.DATE,
            allowNull:true,
            }
    }
    let config= {
        tableName: "comentarios", 
        timestamps: true,
        underscored: true 
    }
    const Comentarios= sequelize.define(alias,columnas,config)
    Comentarios.associate= function (models){
        Comentarios.belongsTo(models.Producto, {
            as: "productos",
            foreignKey: "productos_id",
        })
    }
    Comentarios.associate= function (models){
        Comentarios.belongsTo(models.Usuarios, {
            as: "usuarios",
          foreignKey: "usuario_id",
        })
    }
    return Comentarios
}