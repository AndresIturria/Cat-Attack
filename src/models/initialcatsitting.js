CatSitting = require('../models/catsitting')
require('../database');

async function initDB() {
    try{
        await CatSitting.collection.drop();
    } catch (e){
        console.log("Collection didn't exist, will be created.")
    }

    const initCatSitting = [
        {
            photo: "/img/catsitter1.png",
            name: "Sofía",
            place: "En casa del cuidador",
            price: "18 euros por noche",
            description: "¡No tengo gatos pero me encantan! Llevo unos 2 años cuidando gatos en mi tiempo libre.",

        },
        {
            photo: "/img/catsitter2.png",
            name: "Ignacio",
            place: "En casa del propietario",
            price: "15 euros por noche",
            description: "Amo a los animales, como pueden ver en mi foto, ¡tengo unos cuantos gatitos ya!",
        },
        {
            photo: "/img/catsitter3.png",
            name: "Camila",
            place: "En casa del propietario",
            price: "17 euros por noche",
            description: "Toda mi vida he vivido con animales. En casa tengo 5 perros y 2 gatos (por eso prefiero ir a casa del propietario!). Cuidaré de tus gatos" +
                "como si fueran los mios.",
        }
    ];

    await CatSitting.insertMany(initCatSitting)
}
Promise.all([

    initDB()

]).then(process.exit);


