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
                "¡Al fin y al cabo, también es estresante para ti y tener un problema menos del que preocuparte no te vendrá mal!",
            article: "Si hay algo más estresante que mudarse de casa, es mudarse de casa con un gato. " +
                "Sin embargo, con una buena planificación todo debería ir sobre ruedas. Los gatos desarrollan " +
                "fuertes vínculos con su entorno por lo que las mudanzas resultan bastante estresantes para ellos. " +
                "Una buena planificación con el tiempo necesario te permitirá garantizar un cambio de casa sin contratiempos. " +
                "¡Al fin y al cabo, también es estresante para ti y tener un problema menos del que preocuparte no te vendrá mal!\n" +
                "\n" +
                "El día de la mudanza\n" +
                "\n" +
                "Antes de que llegue el furgón de mudanza, es recomendable que dejes a tu gato encerrado en una habitación para alejarle de todo el trajín y el movimiento de muebles y personas. Un dormitorio puede ser un lugar ideal." +
                "Mete también en esa habitación todas sus cosas: el transportín, la cama del gato, el comedero y el bebedero y la bandeja de arena, y asegúrate de que la puerta y las ventanas están cerradas." +
                "Pon una nota en la puerta para que el personal de la mudanza y todos tus familiares sepan que hay que mantenerla cerrada. \n" +
                "\n" +
                "Cuando todas las habitaciones de la casa ya estén vacías, llega el momento de vaciar el dormitorio donde ha estado encerrado el gato. Antes de retirar los muebles, mete el gato en el transportín y colócalo en el coche de manera segura para el viaje a su nueva casa. Sigue los consejos que te damos abajo para transportar a tu gato." +
                "Los muebles del dormitorio deberían ser los primeros en instalarse en la nueva casa." +
                "Coloca un difusor de feromonas faciales felinas sintéticas en un enchufe situado a nivel del suelo en la nueva habitación donde encerrarás temporalmente a tu gato. Cuando la habitación esté preparada, deja a tu gato dentro con su cama, su comedero y bebedero y su bandeja de arena. La puerta debe permanecer cerrada para aislarle del jaleo del resto de la casa y un miembro de familia puede quedarse un rato con él en la habitación mientras el gato la explora. " +
                "Ofrece a tu gato un poco de alimento. " +
                "Cuando la descarga de muebles haya finalizado, puedes dejar que el gato salga a investigar el resto de la casa, habitación por habitación. \n" +
                "Es importante permanecer lo más tranquilo posible para mostrarle al gato que su nuevo entorno es seguro. \n" +
                "\n" +
                "Asegúrate de que todas las puertas externas y las ventanas están cerradas." +
                "Ten cuidado con permitir que tu gato tenga acceso no vigilado a la cocina o a la despensa ya que los gatos cuando están nerviosos o estresados con frecuencia intentan buscar refugio en espacios estrechos entre los electrodomésticos. " +
                "Si tienes un gato especialmente nervioso, puede ser recomendable dejarlo en una residencia para gatos un día antes de la mudanza y recogerlo el día después cuando ya te hayas instalado en la nueva casa.\n" +
                "\n" +
                "Cómo transportar a tu gato\n" +
                "\n" +
                "Si tu gato se pone nervioso al viajar, puedes consultar con tu veterinario antes del viaje, puede que te recomiende algún calmante suave para ayudarle a soportar mejor el trayecto. " +
                "Dale de comer como siempre pero asegúrate de que su última comida sea como mínimo tres horas antes del viaje. " +
                "Transporta a tu gato en un lugar seguro, por ejemplo una cesta o un transportín especialmente diseñados para transportar animales. " +
                "Pulveriza en el interior del transportín feromonas faciales felinas sintéticas (Feliway, Ceva) media hora antes de meter al gato dentro. " +
                "Coloca el transportín en un asiento bien sujeto con el cinturón de seguridad, en el espacio que queda detrás de los asientos delanteros o inmovilizado sobre los asientos de atrás de manera que no pueda desplazarse. " +
                "No transportes a tu gato en el furgón de la mudanza o en el maletero del coche. " +
                "Si es un viaje largo, quizá tengas que hacer alguna parada para darle agua o para que pueda usar la bandeja de arena, aunque a la mayoría de los gatos no les interesará. " +
                "Si hace un día caluroso, asegúrate de que tu coche está bien ventilado y nunca dejes al gato dentro de un coche recalentado cuando pares para descansar.\n" +
                "\n" +
                "Cómo ayudar a tu gato a instalarse en su nuevo hogar\n" +
                "\n" +
                "Mantén a tu gato dentro de casa durante al menos dos semanas para que se acostumbre al nuevo entorno. " +
                "Dale comidas pequeñas y frecuentes. " +
                "Mantén las mismas rutinas que seguías en tu anterior casa para que tenga la máxima sensación de continuidad y familiaridad. " +
                "Ayuda a tu gato a sentirse seguro en su nueva casa difundiendo su olor por toda la casa. Coge un paño de algodón suave (o usa unos guantes finos de algodón) y frota suavemente a tu gato alrededor de las mejillas y la cabeza para recoger el olor secretado por las glándulas faciales. Frota después el paño o los guantes por distintos rincones de la casa (puertas, paredes y muebles) a la altura del gato. Esto ayudará a que se familiarizarse con su territorio lo más rápidamente posible. Repite este proceso a diario hasta que veas que su gato empieza a dejar de frotarse contra los objetos. " +
                "Sigue utilizando el difusor de feromonas sintéticas y mueve el dispositivo por toda la casa, habitación por habitación. " +
                "Hay que tener especial cuidado con los gatos que viven permanentemente dentro de casa ya que un entorno nuevo puede resultar potencialmente inquietante.\n" +
                "\n" +
                "Cómo dejar que tu gato empiece a salir al exterior\n" +
                "\n" +
                "No dejes salir al gato al exterior durante las primeras dos semanas: durante este tiempo estará todavía familiarizándose con su nueva casa. " +
                "Asegúrate de que tu gato está perfectamente identificado con una medalla con tu nombre, dirección y número de teléfono de contacto. " +
                "Lo ideal es, además, que tu gato tenga microchip. Esta es la manera más segura de asegurarte de que te localizan si se pierde. Si ya lleva el microchip, acuérdate de informar a tu veterinario del cambio de dirección y de número de teléfono. " +
                "Asegúrate de que las vacunas de su gato están en orden antes de dejarlo salir al exterior. " +
                "Si está acostumbrado a llevar collar, puede ser útil que empieces paseándolo por el jardín con una correa. " +
                "No lo fuerces a salir, deja que sea él el que decida si quiere explorar el exterior o no. " +
                "Al principio, mantén siempre la puerta abierta de manera que pueda entrar en casa rápidamente si algo le asusta. " +
                "Los gatos más aventureros y exploradores generalmente se adaptan bien, los gatos más tímidos pueden tardar un tiempo en adaptarse a su nuevo territorio y será necesario acompañarlos al exterior hasta que se sientan más seguros.\n" +
                "\n" +
                "Cambios en el modo de vida\n" +
                "\n" +
                "Los gatos que viven exclusivamente dentro de casa requieren un esfuerzo adicional por parte de sus dueños para estimularlos a hacer ejercicio y evitar el aburrimiento. Entre las cosas que puedes hacer para mejorar el entorno de un gato que vive dentro de casa están: \n" +
                "\n" +
                "Esconder comida seca por en distintos puntos de la casa para proporcionarle la oportunidad de descubrirla por casualidad y \"cazarla\".\n" +
                "Proporcionarle muchos lugares altos a los que pueda subirse y postes para rascar por los que pueda trepar. \n" +
                "Sesiones de juego regulares como mínimo una vez al día.\n" +
                "\n" +
                "Algunas veces los dueños tienen la suerte de mudarse a una casa en la que pueden dejar que su gato salga al exterior por primera vez. La transición del interior al exterior, si se realiza cuidadosamente, contribuirá al bienestar emocional del gato y le permitirá llevar una vida más natural. Sigue las recomendaciones que damos arriba para dejar salir al exterior al gato, pero ten en cuenta que en este caso el proceso deberá ser más gradual. Muchos gatos que salen al exterior por primera vez prefieren hacerlo sólo cuando su dueño está allí porque su presencia les da confianza."
        },
        {
            photo: "/img/consejo2.jpg",
            title: "Presentar un nuevo gatito a un gato adulto",
            description: "La llegada a casa de un nuevo gatito es un acontecimiento especial y emocionante" +
                " para toda la familia…¡menos probablemente para tu gato adulto!" +
                "Sin embargo, con un poco de planificación, psicología y consideración, puedes hacer que el proceso de " +
                "adaptación sea relativamente tranquilo, y sentar las bases para conseguir la relación de amistad que toda " +
                "familia desea cuando tiene dos gatos conviviendo en casa.",
            article: "La llegada a casa de un nuevo gatito es un acontecimiento especial y emocionante" +
                " para toda la familia…¡menos probablemente para tu gato adulto!" +
                "Sin embargo, con un poco de planificación, psicología y consideración, puedes hacer que el proceso de " +
                "adaptación sea relativamente tranquilo, y sentar las bases para conseguir la relación de amistad que toda " +
                "familia desea cuando tiene dos gatos conviviendo en casa.\n" +
                "\n" +
                "Paso 1: prepara la casa\n" +
                "\n" +
                "Si es posible, antes de que tu nuevo gatito llegue a casa, lleva una manta (o un juguete) al criador o a la tienda de mascotas, para que se impregne de su olor. Después, llévala a casa y déjala allí para que tu gato se vaya familiarizando con él. Así, cuando por fin se conozcan, su olor ya no será completamente nuevo, y por tanto no le resultará tan amenazador.\n" +
                "\n" +
                "Prepara una habitación aparte (por ejemplo el cuarto de la plancha) con juguetes, una cama, un bol para el agua y otro para la comida, para que el gatito pase los primeros días. Y no te preocupes, será sólo una medida temporal. \n" +
                "\n" +
                "Paso 2: deja que se acostumbren al olor del otro\n" +
                "\n" +
                "El día de la llegada, encierra a tu gato adulto en otra habitación en la que hayas colocado sus cosas favoritas. Lleva al nuevo gatito a casa y deja que la recorra durante un rato para que se vaya aclimatando. Luego llévalo al cuarto que habías preparado para él.\n" +
                "\n" +
                "Ahora ya puedes dejar que tu gato adulto salga de la habitación (pero asegúrate de que no puede acceder a la habitación del gatito). Deja que te huela las manos con las que has estado acariciando al gatito, y dale algún premio para calmarle y para que asocie el nuevo olor con \"algo bueno\".\n" +
                "\n" +
                "Introduce gradualmente el olor del gatito en la casa, por ejemplo intercambiándoles los comederos y las camas. En cuanto se hayan familiarizado con el olor, puedes permitirles que exploren el territorio del otro, pero siempre manteniéndoles separados.  \n" +
                "\n" +
                "Paso 3: finalmente, deja que se conozcan\n" +
                "\n" +
                "El mejor momento para que se conozcan físicamente es la hora de la comida, cuando su deseo de comer puede con cualquier tipo de distracción. Cuando se vean por primera vez es muy posible que se gruñan y bufen. Es algo normal, forma parte del establecimiento de la jerarquía entre ellos. Vigílales y prepara una manta por si tienes que separarles en el caso de que vayan más allá y comiencen a pelearse. Pero, con un poco de suerte, con todos los preparativos anteriores, cuando finalmente se conozcan, se \"reconocerán\" lo suficiente como para \"tolerarse\" unos minutos mientras comen. \n" +
                "\n" +
                "Paso 4: crea una buena relación y trátalos por igual\n" +
                "\n" +
                "Inmediatamente después de su primera comida juntos, vuelve a separarlos hasta la siguiente comida, aumentando gradualmente el tiempo que pasan juntos. Dales a ambos atención, cariño y premios por igual mientras estén juntos. Esto no sólo creará asociaciones positivas, si no que también demostrará que no existen favoritismos.\n" +
                "\n" +
                "Recuerda, decidir cuál de ellos va de ser el \"gato dominante\" no es responsabilidad tuya; esta posición se decidirá entre ellos de manera bastante natural. Lo único que tienes que hacer es mantenerte imparcial y ser equitativo con ambos."
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
                "al menos hasta que esté a gusto en el nuevo entorno. En este artículo te contamos todos los pasos que debes seguir.",
            article: "A la mayoría de los gatos no les hace mucha gracia los viajes: " +
                "suelen estar fuertemente vinculados a su territorio y se sienten muy vulnerables " +
                "en un entorno nuevo. La gratificación de estar con la familia y de iniciar una aventura " +
                "no apasiona al felino, a diferencia de lo que ocurre con sus primos caninos. " +
                "Si quieres llevarte a tu gato en un viaje en tren, coche o avión, tendrás que asegurarte " +
                "de que vaya protegido y cómodo en un transportín adecuado y que siga confinado al final del trayecto, " +
                "al menos hasta que esté a gusto en el nuevo entorno. En este artículo te contamos todos los pasos que debes seguir.\n" +
                "\n" +
                "Viajar en coche\n" +
                "\n" +
                "Tener un gato suelto en el coche puede ser muy peligroso: no solo podría provocar un accidente por pegarse al conductor, sino que, si hubiese una ventanilla o puerta abiertas o se produjese un accidente, el gato podría escapar y acabar perdiéndose.\n" +
                "\n" +
                "Tendrás que invertir en un transportín que sea sólido y fácil de limpiar, por si el gato orinase, defecase o vomitase durante el viaje. Ten en cuenta también el tiempo que hará, tanto en tu ubicación actual como la temperatura probable en tu destino. Si hay muchas probabilidades de que haga mucho calor, entonces utiliza un transportín que permita una buena ventilación; si va a hacer frío, sería útil uno que pueda proporcionar calidez sin corrientes y que a la vez permita una buena ventilación. Coloca el transportín donde vaya a estar seguro en caso de frenazos bruscos y donde a la vez haya buena ventilación: por ejemplo, no lo coloques debajo de mucho equipaje en la parte trasera del coche. No pongas al gato en el maletero y ten cuidado con la parte trasera de los vehículos de cinco puertas: la ventilación puede ser deficiente y tu gato podría sobrecalentarse. Puedes asegurar el transportín detrás de uno de los asientos delanteros o utilizar el cinturón de seguridad para asegurarte de que está bien sujeto al asiento.\n" +
                "\n" +
                "Comprueba cómo está tu gato periódicamente, especialmente si hace demasiado calor: no subestimes lo rápido que puede aumentar la temperatura dentro de un coche. Tenlo en cuenta si haces una parada para comer y dejas al gato en el coche. Pon el coche en la sombra y deja las ventanas abiertas; si hace mucho calor, haz un pícnic y cómetelo cerca con el gato dentro de su transportín fuera del coche o con todas las puertas abiertas. Los golpes de calor pueden resultar letales.\n" +
                "\n" +
                " Viajar en tren\n" +
                "\n" +
                "Como es obvio, si viajas en tren necesitarás un trasportín muy seguro del que tu gato no pueda escapar, pero también lo suficientemente ligero como para llevarlo de un lado a otro. Te interesa uno con la base sólida por si el gato orina, para que no manche el vagón. Fórralo con papel y material absorbente y lleva también cojines de repuesto. En función del tipo de tren y el espacio disponible, es probable que puedas tener al gato en el transportín sobre tu regazo.\n" +
                "\n" +
                "Viajar en avión\n" +
                "\n" +
                "Si tienes previsto viajar en avión con tu gato, entonces necesitas planificar el viaje con la suficiente antelación. Cada compañía aérea tiene sus propios requisitos y restricciones para viajar con mascotas. Muchas ya permiten que los gatos viajen en la cabina de pasajeros bajo el asiento delantero, así que asegúrate de comprobar el tamaño de dicho espacio antes de volar. Los transportines con laterales blandos pueden ser ideales para este espacio. También puede ser necesaria una visita al veterinario antes de volar si necesitas el registro de vacunas o un certificado médico. Aunque la mayoría de los gatos viaja bien, no se recomienda llevar a una gata embarazada o a gatitos de menos de tres meses de edad.\n" +
                "\n" +
                "Llegada a destino\n" +
                "\n" +
                "Cuando llegues, deja al gato en una habitación y procura que esta sea segura, cómoda y que no pueda escapar de ella. Ofrécele agua y un poco de comida, aunque es posible que no tenga ningún interés por comer hasta que se acomode un poco más. Alimentarlo con dos comidas al día lo animará a acudir a ti a por comida cuando lo llames. Poco a poco, déjalo explorar un poco más y utiliza la comida para asegurarte de que no vaya demasiado lejos y de que regrese para la comida habitual.\n" +
                "\n" +
                "Uso del transportín\n" +
                "\n" +
                "Para los gatos, la presentación del transportín suele significar un viaje al veterinario, por lo que no suele entusiasmarles entrar en ellos. Tómate tu tiempo para que el gato se acostumbre al transportín con tiempo suficiente antes del viaje.\n" +
                "\n" +
                "Haz que sea un lugar agradable en el que estar: dale premios para gatos en su interior y haz una cama cómoda o coloca cojines con un olor familiar que puedas usar durante el viaje. Deja la puerta abierta y anima a tu gato a entrar y salir y a dormir dentro. Así, cuando llegue el momento del viaje de verdad, el gato al menos estará familiarizado con su entorno inmediato.\n" +
                "\n" +
                "Si tienes más de un gato, es mejor tener un transportín para cada uno, para que haya una mejor ventilación, más espacio y menos posibilidades de sobrecalentamientos. Incluso los mejores amigos pueden llegar a estresarse durante un viaje, comportarse de una forma impropia y mostrarse inquietos entre ellos; los transportines separados evitarán toda lesión. Si por lo menos pueden verse y escucharse, se podrán sentir reconfortados.\n" +
                "\n" +
                "Aplaza la comida entre cuatro o cinco horas antes del viaje, por si el gato se marease durante el trayecto. Ofrécele agua hasta el momento de salir y de nuevo durante el viaje siempre que sea posible. Puedes comprar cuencos que se acoplan a las jaulas para que el gato no los tire durante el viaje y que sean fáciles de rellenar sin tener que abrir la jaula, por si hubiese retrasos durante el viaje."
        }
    ];

    await Consejos.insertMany(initConsejos)
}
Promise.all([

    initDB()

]).then(process.exit);


