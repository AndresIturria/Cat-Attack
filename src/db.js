const { Sequelize, Model, DataTypes } = require('sequelize');

const db = new Sequelize('catattack', 'root', 'root', {  //process.env.DB_USER, process.env.DB_PASSWORD, { para despues
    dialect: 'sqlite',
    storage: 'catattack.db',
    dialectOptions: {
      // Your sqlite3 options here
    }
  });
  
  const User = db.define('user', {
    // Model attributes are defined here
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName2:{
      type: DataTypes.STRING
      // allowNull defaults to true
    },
    username: {
      type: DataTypes.TEXT,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    birthday: {
      type: DataTypes.DATEONLY, // yyyy-mm-dd
      allowNull: false
    },
    email:{
      type: DataTypes.STRING,
      allowNull: false
    },
    isAdmin:{
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  
  }, {
    // Other model options go here
    tableName: 'users'
  });
  
  (async () => {
    await db.sync({ force: true });
    // Code here
    const admin = await User.create({ firstName: "admin", lastName1: "admin", username: "admin", password: "admin", birthday:"1900-01-01", email:"admin@catattack.com", isAdmin:"true"})
    const normaluser = await User.create({ firstName: "test", lastName1:"test", lastName2:"test", username: "test", password: "test", birthday:"1996-05-04", email: "test@catattack.com"})
    const guestuser = await User.create({ firstName: "guest", lastName1:"guest", lastName2:"guest", username: "guest", password: "guest", birthday:"1996-05-04", email: "guest@catattack.com"})
    User.sync().then(() => console.log("Dabtase ready"));
  })();

  exports = module.exports = {
      db,
      User
  }