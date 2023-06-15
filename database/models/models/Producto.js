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
        usuario_id: {
            type: dataTypes.INTEGER,
        },
        img_url:{
            type: dataTypes.STRING
        }
        ,
        created_at: {
            type:dataTypes.DATE,
            allowNull: true,
        },
        updated_at: {
            type:dataTypes.DATE,
            allowNull: true,
        }

    }
    let config= {
        tableName: "productos", 
        timestamps: true,
        underscored: true,
        
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