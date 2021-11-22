Algunas notas:


Para saber si mongo esta corriendo en windows: tasklist /FI "IMAGENAME eq mongod.exe"


By default, mongodb server will start at port 27017


abrir consola de mongo:
C:\Program Files\MongoDB\Server\5.0\bin         ejecutar mongo


Algunos comandos para shell de mongo:
show dbs
use cat-attack
show collections
db.users.find().pretty()


nodemon monitorea los cambios en el codigo y reinicia el servidor.
npx nodemon ./index.js