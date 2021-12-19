Consejos = require('../models/consejos')
require('../database');

async function initDB() {
    try{
        await Consejos.collection.drop();
    } catch (e){
        console.log("Collection didn't exist, will be created.")
    }

    const initConsejos = [
        {
            photo: "/img/consejo1.jpg",
            title: "Cómo se adapta un gato a su nuevo hogar",
            description: "Si hay algo más estresante que mudarse de casa, es mudarse de casa con un gato. " +
                "Sin embargo, con una buena planificación todo debería ir sobre ruedas. Los gatos desarrollan " +
                "fuertes vínculos con su entorno por lo que las mudanzas resultan bastante estresantes para ellos. " +
                "Una buena planificación con el tiempo necesario te permitirá garantizar un cambio de casa sin contratiempos. " +
                "¡Al fin y al cabo, también es estresante para ti y tener un problema menos del que preocuparte no te vendrá mal!"
        },
        {
            photo: "/img/consejo2.jpg",
            title: "Presentar un nuevo gatito a un gato adulto",
            description: "La llegada a casa de un nuevo gatito es un acontecimiento especial y emocionante" +
                " para toda la familia…¡menos probablemente para tu gato adulto!" +
                "Sin embargo, con un poco de planificación, psicología y consideración, puedes hacer que el proceso de " +
                "adaptación sea relativamente tranquilo, y sentar las bases para conseguir la relación de amistad que toda " +
                "familia desea cuando tiene dos gatos conviviendo en casa."
        },
        {
            photo: "/img/consejo3.jpg",
            title: "Consejos útiles para viajar con tu gato",
            description: "A la mayoría de los gatos no les hace mucha gracia los viajes: " +
                "suelen estar fuertemente vinculados a su territorio y se sienten muy vulnerables " +
                "en un entorno nuevo. La gratificación de estar con la familia y de iniciar una aventura " +
                "no apasiona al felino, a diferencia de lo que ocurre con sus primos caninos. " +
                "Si quieres llevarte a tu gato en un viaje en tren, coche o avión, tendrás que asegurarte " +
                "de que vaya protegido y cómodo en un transportín adecuado y que siga confinado al final del trayecto, " +
                "al menos hasta que esté a gusto en el nuevo entorno. En este artículo te contamos todos los pasos que debes seguir. "
        }
    ];

    await Consejos.insertMany(initConsejos)
}
Promise.all([

    initDB()

]).then(process.exit);


