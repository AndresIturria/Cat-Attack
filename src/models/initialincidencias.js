Incidencia = require('../models/incidencias')
require('../database');

async function initDB() {
    try{
        await Incidencia.collection.drop();
    } catch (e){
        console.log("Collection didn't exist, will be created.")
    }

    const initIncidencia = [

        //report de test (61d2c9077703d834fc81eb38) a Percy (61d2c8db4bdcbb3037cc9193)
        {
            target: "Percy",
            issuer: "test",
            type: "Adopción",
            desc: "No se puede dar en adopción a un gato así de guapo.",
            status: "false",
        },

        //report de test (61d2c9077703d834fc81eb38) a Boo (61d2c8db4bdcbb3037cc9195)
        {
            target: "Boo",
            issuer: "test",
            type: "Adopción",
            desc: "no se indica su peso",
            status: "false",
        }
    ];

    await Incidencia.insertMany(initIncidencia)
}
Promise.all([

    initDB()

]).then(process.exit);


