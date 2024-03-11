// this index.js file is only responsible for defining and configuring the associations between different models in the application
// eg user.hasMany(Projects, {}), establish foreing key relations
// module.exports

const User = require('./User');
const Post = require('./Post');

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Post };
