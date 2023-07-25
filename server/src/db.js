const { Sequelize } = require("sequelize");

const fs = require('fs');
const path = require('path');

const sequelize = new Sequelize('postgres://pf:JoZSCTFoPpDDxTwuc6amy663hZq1GUt9@dpg-cil2di95rnuvtgto0omg-a/ecommerce_uhbm', {
  logging: false, 
  native: false, 
});
const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });


modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const { User, Order, Product, Category, FirebaseUser, Payments, Reviews, Cart } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
User.hasMany(Payments, { foreignKey: 'id_user' })
Payments.belongsTo(User, { foreignKey: 'id_user' })

User.hasMany(Order, { foreignKey: 'id_user' })
Order.belongsTo(User, { foreignKey: 'id_user' })

Product.belongsToMany(Order,{through: 'product_order'})
Order.belongsToMany(Product,{through: 'product_order'})

Product.belongsToMany(Category,{through: 'product_category'})
Category.belongsToMany(Product,{through: 'product_category'})

Product.belongsToMany(User,{through: 'product_user'})
User.belongsToMany(Product,{through: 'product_user'})

FirebaseUser.belongsToMany(Product,{through: 'product_firebase'})
Product.belongsToMany(FirebaseUser,{through: 'product_firebase'})

Product.hasMany(Reviews, { foreignKey: 'id_product' });
Reviews.belongsTo(Product, { foreignKey: 'id_product' });

User.hasOne(Cart,{foreignKey: 'id_user'})
Cart.belongsTo(User,{foreignKey: 'id_user'})

Product.belongsToMany(Cart,{through: 'product_cart'})
Cart.belongsToMany(Product,{through: 'product_cart'})

User.hasMany(Reviews, { foreignKey: 'id_user' });
Reviews.belongsTo(User, { foreignKey: 'id_user' });


// Diego estuvo aki


module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};