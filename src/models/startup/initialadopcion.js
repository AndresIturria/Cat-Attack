Adopcion = require('../adopcion')
require('../../database');

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
            age: "2 años",
            sex: "Macho",
            neutered: "Sí",
            breed: "Común europeo",
            weight: "3kg-6kg",
            ownerid: "61ae2d59f0adeead500acd14",
        },
        {
            photo: "/img/adopcion2.jpg",
            name: "Koda",
            age: "1 año",
            sex: "Macho",
            neutered: "No",
            breed: "Desconocida",
            weight: "3kg-6kg",
            ownerid: "61ae2d59f0adeead500acd14",
        },
        {
            photo: "/img/adopcion3.png",
            name: "Boo",
            age: "4 años",
            sex: "Hembra",
            neutered: "No",
            breed: "Ragdoll",
            weight: "6kg+",
            ownerid: "61ae2d59f0adeead500acd14",
        }
    ];

    await Adopcion.insertMany(initAdopcion)
}
Promise.all([

    initDB()

]).then(process.exit);


