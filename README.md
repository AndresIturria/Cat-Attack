# Cat-Attack

## Sobre Cat-Attack

Este proyecto busca solucionar en una misma aplicación web cualquier duda o situación a la que se enfrentan los dueños de un gato. Para poder aprovechar los servicios de esta aplicación, es necesario realizar un registro. Los usuarios registrados pueden leer diversos consejos para cuidar a sus mascotas, pueden poner o buscar gatos en adopción y encontrar el cuidador perfecto para que puedan sentirse cómodos al viajar, dejando su mascota en manos de alguien de confianza.

## Dev Instructions

Install dependencies:
>npm install

To run the server:
>npm start

The index page will be at: [127.0.0.1:3000](127.0.0.1:3000)

To run the server with nodemon (monitor the changes and restarts the server):
>npx nodemon ./bin/www

## Database

MongoDB is used, link for download: [MongoDB Community Server](https://www.mongodb.com/try/download/community)

To check if an instance of MongoDB is running in Windows:
> tasklist /FI "IMAGENAME eq mongod.exe"

By default, mongodb server will start at port 27017

To open a mongo shell:
> C:\Program Files\MongoDB\Server\5.0\bin\mongo

Some useful commands for mongo shell:
>show dbs
> 
>use cat-attack
> 
>show collections
> 
>db.users.find().pretty()

### Initialize DB
By default, the server will create the db and the collection if you haven't created it before.
A script is provided to drop the collection users and initialize it with 3 default users: admin, test and guest.
To execute the script:
>node ./models/initialusers.js
