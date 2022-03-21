const bodyParser = require("body-parser");
const express = require("express")
const cors = require("cors")
const app = express();
const mongoose = require("mongoose")

const Categories = require('./Categories.js')
const Products = require('./Products.js')


const whitelist = ['http://localhost:3000', 'http://localhost:8080', 'https://shrouded-journey-38552.heroku']
const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin)
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable")
      callback(null, true)
    } else {
      console.log("Origin rejected")
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions))


const path = require('path');
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}



app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}))

mongoose.connect("mongodb+srv://sandro_filho98:n1N9yL9EXmZPzyh8@cluster0.0lrhq.mongodb.net/cardapio_virtual?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log("Connected to db successfully!")
})

app.get('/api/getCategories', (req, res)=>{
    Categories.find({}, (err, success)=>{
        res.send(success)
    })
})



app.get('/api/getProducts/', (req, res)=>{

    Products.find({'id_category': req.query.id_category}, (err, success)=>{
        res.send(success)
    })

})




app.post('/api/insertProducts/', (req, res)=>{

    console.log(req.params)

})




app.listen(3001, () =>{
    console.log("running on port ", 3001)
})












