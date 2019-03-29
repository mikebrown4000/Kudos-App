const Sequelize = require('sequelize');

let sequelize;
if (process.env.DATABASE_URL) {
  console.log('called');
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect:  'postgres',
    logging:  true,
    operatorsAliases: false,
    define: {
      underscored: true
    }
  });
} else {
  sequelize = new Sequelize({
    database: 'kudos_db',
    dialect: 'postgresql',
    operatorsAliases: false,
    define: {
      underscored: true
    }
  });
}

const User = sequelize.define('user', {
  email: { type: Sequelize.STRING, unique: true },
  password_digest: Sequelize.STRING,
  first_name: Sequelize.STRING,
  last_name: Sequelize.STRING,
  weekly_budget: {type: Sequelize.INTEGER, defaultValue: 0},
  restaurants: {type: Sequelize.INTEGER, defaultValue: 0},
  restaurants_bool: Sequelize.BOOLEAN,
  groceries: {type: Sequelize.INTEGER, defaultValue: 0},
  groceries_bool: Sequelize.BOOLEAN,
  drinks: {type: Sequelize.INTEGER, defaultValue: 0},
  drinks_bool: Sequelize.BOOLEAN,
  entertainment: {type: Sequelize.INTEGER, defaultValue: 0},
  entertainment_bool: Sequelize.BOOLEAN,
  shopping: {type: Sequelize.INTEGER, defaultValue: 0},
  shopping_bool: Sequelize.BOOLEAN,
  bills: {type: Sequelize.INTEGER, defaultValue: 0},
  bills_bool: Sequelize.BOOLEAN,
  miscellanious: {type: Sequelize.INTEGER, defaultValue: 0},
  miscellanious_bool: Sequelize.BOOLEAN,
});

module.exports = {
  User,
  sequelize,
};
