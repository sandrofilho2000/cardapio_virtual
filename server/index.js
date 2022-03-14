const bodyParser = require("body-parser");
const express = require("express")
const cors = require("cors")
const app = express();
const mysql = require("mysql")

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "pizzariareal"
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))


app.get('/api/getCategories', (req, res)=>{
    const sqlSelect = "SELECT * FROM categories"
    db.query(sqlSelect, (err, result)=>{
        res.send(result)
    })
})





app.listen("3001", () =>{
    console.log("running on port 3001")
})