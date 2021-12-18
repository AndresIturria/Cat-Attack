User = require('../models/consejos')
require('../database');

async function initDB() {
    try{
        await Consejos.collection.drop();
    } catch (e){
        console.log("Collection didn't exist, will be created.")
    }

    const initConsejos = [
        {
            title: "Ejemplo 1",
            description: "una descripción"
        },
        {
            title: "Ejemplo 2",
            description: "otra"
        },
        {
            title: "Ejemplo 3",
            description: "ultima"
        }
    ];

    await Consejos.insertMany(initConsejos)
}
Promise.all([

    initDB()

]).then(process.exit);


