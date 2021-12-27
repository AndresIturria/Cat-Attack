Adopcion = require('../models/adopcion')
require('../database');

async function initDB() {
    try{
        await Adopcion.collection.drop();
    } catch (e){
        console.log("Collection didn't exist, will be created.")
    }

    const initAdopcion = [
        {
            photo: "/img/adopcion1.jpg",
            name: "Percy",
            description: "Gato común europeo blanco, muy cariñoso. Tiene 1 año."
        },
        {
            photo: "/img/adopcion2.jpg",
            name: "Koda",
            description: "Gatito de 1 mes, juguetón y curioso."
        },
        {
            photo: "/img/adopcion3.png",
            name: "Toothless",
            description: "Gato de 2 años, muy familiar y tranquilo."
        }
    ];

    await Adopcion.insertMany(initAdopcion)
}
Promise.all([

    initDB()

]).then(process.exit);


