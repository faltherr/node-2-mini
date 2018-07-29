const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require("massive")
require('dotenv').config()
const pc = require("./controller.js")

const app = express();

massive(process.env.CONNECTION_STRING).then(dbInstance =>{
    app.set('db', dbInstance)
    // dbInstance.new_planes()
    // .then(planes => console.log(planes))
    // .catch(err=> console.log(err))

    // dbInstance.get_planes()
    // .then(planes=>console.log(planes))
    // .catch(err => console.log(err))
})

app.get('/api/planes/', pc.getPlanes)

app.use( bodyParser.json() );
app.use( cors() );

const port = process.env.PORT || 3000
app.listen( port , () => { console.log(`Server listening on port ${port}`); } );

