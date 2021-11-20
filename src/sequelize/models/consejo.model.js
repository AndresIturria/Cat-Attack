const { DataTypes } = require('sequelize');

// We export a function that defines the model.
// This function will automatically receive as parameter the Sequelize connection object.
module.exports = (sequelize) => {
    sequelize.define('consejo', {
		// The following specification of the 'id' attribute could be omitted
		// since it is the default.
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        contenido: {
            type: DataTypes.TEXT,
            wallowNull: false
        }
    }, {
          // Other model options go here
          tableName: 'consejos'
    });
};
    