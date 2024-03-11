const server = require('./src/app')
const PORT = 3001
const { conn } = require('./src/DB_connection')

conn.sync({ alter: true })
.then(()=> {
    server.listen(PORT, ()=> {
        console.log('Puerto escuchando en el 3001')
    })
})
