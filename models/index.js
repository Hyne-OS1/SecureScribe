// this index.js file is only responsible for defining and configuring the associations between different models in the application
// eg user.hasMany(Projects, {}), establish foreing key relations
// module.exports

const User = require('./User');
const Scribe = require('./Scribe');

User.hasMany(Scribe, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Scribe.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Scribe };
