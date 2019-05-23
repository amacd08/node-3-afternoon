module.exports = {
    create: (req,res) => {
        const {name, description, price, image_url} = req.body
        let db = req.app.get('db')
        db.create_product({name, description, price, image_url}).then(product => {
            console.log(product)
            res.sendStatus(200)
        }).catch(err => {
            console.log(err)
            res.sendStatus(500)
        })
    },
    getOne: (req,res) => {
        const product_id = req.params.id
        let db = req.app.get('db')
        db.read_product({product_id}).then(product => {
            res.send(product)
        }).catch(err => res.sendStatus(500))
    },

    getAll: (req,res) => {
        const dbInstance = req.app.get('db')
        dbInstance.read_products().then(product => {
            res.send(product)
        }).catch(err => console.log(err))
    },

    update: (req,res) => {
        const  {id} = req.params
        const {desc} = req.query
        console.log(desc, id)
        let db = req.app.get('db')
        db.update_product({desc, id}).then(product => res.sendStatus(200))
        .catch(err => {
            console.log(err)
            res.sendStatus(500)
        })
    },
    delete: (req,res) => {
        const {id} = req.params
        let db = req.app.get('db')
        db.delete_product({id}).then(product => {
            res.sendStatus(200)
        }).catch(err => {
            console.log(err)
            res.sendStatus(500)
        })
    }
}