const sequelize= require('../db')
const {DataTypes}= require('sequelize')


const Type= sequelize.define ('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Brand= sequelize.define ('brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})


const Product = sequelize.define ('product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    img: {type: DataTypes.STRING, allowNull: false},
    })


const User= sequelize.define ('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true, },
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Rating= sequelize.define ('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false},
})

const ProductInfo= sequelize.define ('device_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})

const TypeBrand= sequelize.define ('type_brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
 })

Product.hasMany(Type)
Type.belongsTo(Product)



User.hasMany(Rating)
Rating.belongsTo(User)

Type.hasMany(Product)
Product.belongsTo(Type)

Product.hasMany(Rating)
Rating.belongsTo(Product)

Product.hasMany(ProductInfo, {as: 'info'})
ProductInfo.belongsTo(Product)

Brand.hasMany(Product)
Product.belongsTo(Brand)

Type.belongsToMany(Brand, {through:TypeBrand })
Brand.belongsToMany(Type, {through:TypeBrand})


module.exports = {
    Type,
    User,
    Product,
    ProductInfo,
    Rating,
    Brand,
    TypeBrand
}


