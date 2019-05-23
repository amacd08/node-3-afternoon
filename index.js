require('dotenv').config()
const express=require('express')
const massive=require('massive')
const {SERVER_PORT, CONNECTION_STRING} = process.env
const app = express()
app.use(express.json())
const pc = require('./controller/products_controller')



massive(CONNECTION_STRING).then(dbInstance => {
    app.set('db',dbInstance)
    console.log('DB Connection Established')
})

app.get('/api/products', pc.getAll)
app.get('/api/products/:id', pc.getOne)
app.put('/api/products/:id', pc.update)
app.post('/api/products', pc.create)
app.delete('/api/products/:id', pc.delete)

app.listen(SERVER_PORT, () => console.log(`Listening on ${SERVER_PORT}`))

