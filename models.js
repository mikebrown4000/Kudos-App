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
  weekly_budget: Sequelize.INTEGER,
  restaurants: Sequelize.INTEGER,
  groceries: Sequelize.INTEGER,
  drinks: Sequelize.INTEGER,
  entertainment: Sequelize.INTEGER,
  shopping: Sequelize.INTEGER,
  bills: Sequelize.INTEGER,
  miscellanious: Sequelize.INTEGER,
});

module.exports = {
  User,
  sequelize,
};
