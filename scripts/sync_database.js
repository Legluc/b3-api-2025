require('dotenv').config();
const { sequelize } = require('../models/');

(async () => {
    await sequelize.sync({alter: true});
})();