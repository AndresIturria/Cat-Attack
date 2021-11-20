const { DataTypes } = require('sequelize');

// We export a function that defines the model.
// This function will automatically receive as parameter the Sequelize connection object.

module.exports = (sequelize) => {
	sequelize.define('user', {
		// The following specification of the 'id' attribute could be omitted
		// since it is the default.
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
};
