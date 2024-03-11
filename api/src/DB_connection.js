require('dotenv').config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;
const { Sequelize } = require('sequelize');
const FavoriteModel = require('./models/Favorite')
const UserModel = require('./models/User')

const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/rickandmorty`,
   { logging: false, native: false }
);

FavoriteModel(sequelize)
UserModel(sequelize)

// Relaciones de los modelos
const { User, Favorite } = sequelize.models;
//  Un usuario puede tener muchos personajes favoritos. 
User.belongsToMany(Favorite, {through: 'user_favorite'})

// Un personaje puede ser el favorito de muchos usuarios.
Favorite.belongsToMany(User, {through: 'user_favorite'})
module.exports = {
   User,
   Favorite,
   conn: sequelize,
};
