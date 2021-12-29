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
            age: "2 años",
            sex: "Macho",
            neutered: "Sí",
            breed: "Común europeo",
            fur: "Blanco con un poco de marrón claro",
            eyes: "Azules",
            description: "Es muy cariñoso y tranquilo, me mudo y necesito encontrarle un hogar."
        },
        {
            photo: "/img/adopcion2.jpg",
            name: "Koda",
            age: "1 año",
            sex: "Macho",
            neutered: "No",
            breed: "Desconocida",
            fur: "Naranja",
            eyes: "Miel",
            description: "Es súper juguetón y curioso. Le encanta comer!! El paté sobretodo lo adora."
        },
        {
            photo: "/img/adopcion3.png",
            name: "Boo",
            age: "4 años",
            sex: "Hembra",
            neutered: "No",
            breed: "Ragdoll",
            fur: "Negro",
            eyes: "Verdes",
            description: "Es muy familiar, se porta buenísimo. Le gustan mucho los mimos."
        }
    ];

    await Adopcion.insertMany(initAdopcion)
}
Promise.all([

    initDB()

]).then(process.exit);


