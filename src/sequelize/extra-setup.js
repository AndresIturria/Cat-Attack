function applyExtraSetup(sequelize) {
	const { user, consejo } = sequelize.models;

	user.hasMany(consejo);
	consejo.belongsTo(user);
}

module.exports = { applyExtraSetup };
