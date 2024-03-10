// seeds file will use both sequelize package and require root path to config connection.js

// const variable to grab user data. require models file location.

// const userdata "example". these const variables will grab "example.json file". json files are populated from the model data
// "const userData = require('./userData.json');"


// const variable ---> async await function ---- seedDatabase(); at end

const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const post of postData) {
    await Post.create({
      ...post,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();