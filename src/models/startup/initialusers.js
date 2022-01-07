User = require('../user')
require('../../database');
const bcrypt = require('bcrypt-nodejs');

async function initDB() {
    try{
        await User.collection.drop();
    } catch (e){
        console.log("Collection didn't exist, will be created.")
    }

    const initUsers = [
        {
            username: "admin",
            password: bcrypt.hashSync("admin", bcrypt.genSaltSync(10)),
            firstName: "admin",
            lastName1: "admin",
            lastName2: "admin",
            email: "admin@catattack.com",
            birthday: new Date("<2000-01-01>"),
            description: "This is the admin account",
            isAdmin: "true"
        },
        {
            username: "guest",
            password: bcrypt.hashSync("guest", bcrypt.genSaltSync(10)),
            firstName: "guest",
            lastName1: "guest",
            lastName2: "guest",
            email: "guest@catattack.com",
            birthday: new Date("<2000-01-01>"),
            description: "This is the guest account",
            isAdmin: "false"
        },
        {
            username: "test",
            password: bcrypt.hashSync("test", bcrypt.genSaltSync(10)),
            firstName: "test",
            lastName1: "test",
            lastName2: "test",
            email: "test@catattack.com",
            birthday: new Date("<2000-01-01>"),
            description: "This is a test account",
            isAdmin: "false"
        }
    ];

    await User.insertMany(initUsers)
}
Promise.all([

    initDB()

]).then(process.exit);


