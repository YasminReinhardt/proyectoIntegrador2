module.exports= function(sequelize, dataTypes) {
    let alias= "Producto"
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
        descripcion: {
            type: dataTypes.TEXT
        },
        img_url:{
            type: dataTypes.STRING
        }

    }
    let config= {
        tableName: "productos", 
        timestamps: false,
        underscored: true
        
    }
    const Producto= sequelize.define(alias,columnas,config)
        Producto.associate= function (models){
            Producto.belongsTo(models.Usuarios, {
                as: 'usuarios',
                foreignKey: 'usuario_id'
            }),
            Producto.hasMany(models.Comentarios, {
                as: "comentarios",
            foreignKey: "productos_id"
            })
    }

    return Producto
}