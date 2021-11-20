const sequelize = require('../sequelize');

async function reset() {
	console.log('Will rewrite the SQLite example database, adding some dummy data.');

	await sequelize.sync({ force: true });

	await sequelize.models.user.bulkCreate([
		{ firstName: "admin", lastName1: "admin", username: "admin", password: "admin", birthday:"1900-01-01", email:"admin@catattack.com", isAdmin:"true"},
		{ firstName: "test", lastName1:"test", lastName2:"test", username: "test", password: "test", birthday:"1996-05-04", email: "test@catattack.com"},
		{ firstName: "guest", lastName1:"guest", lastName2:"guest", username: "guest", password: "guest", birthday:"1996-05-04", email: "guest@catattack.com"},
	]);

	// Let's create random consejos for each user
/* 	for (const user of await sequelize.models.user.findAll()) {
		for (let i = 0; i < 10; i++) {
			const content = pickRandom([
				'violin',
				'trombone',
				'flute',
				'harp',
				'trumpet',
				'piano',
				'guitar',
				'pipe organ',
			]);

			await user.createConsejo({
				contenido: content,
			});

			// The following would be equivalent in this case:
			// await sequelize.models.instrument.create({
			// 	type: type,
			// 	purchaseDate: randomDate(),
			// 	orchestraId: orchestra.id
			// });
		}
	} */

	console.log('Done!');
}

reset();