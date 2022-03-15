const bodyParser = require("body-parser");
const express = require("express")
const cors = require("cors")
const app = express();
const mysql = require("mysql")

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "pizzariareal"
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}))



/* SELECT c.name as c_name, p.name as p_name, op.name, pp.price FROM `categories` c INNER JOIN products p ON p.id_category = c.id INNER JOIN option_sizes op ON op.id_option = c.id INNER JOIN product_prices pp ON pp.id_produto = p.id; */




app.get('/api/getCategoryNames', (req, res)=>{
    console.log("DONE")
    pool.getConnection((err, connection) => {
        console.log(`CONNECT AS ID ${connection.threadId}`)
        
        connection.query("SELECT * FROM categories WHERE name not like 'vi%'", (err, result)=>{
            connection.release()
            if(!err){
                res.send(result)
                console.log("CONNECTED")
            }else{
                console.log(err)
            }
        })
    })
})


app.get('/api/getCategorySizes/', (req, res)=>{
    pool.getConnection((err, connection) => {
        const sql = "SELECT * FROM `option_sizes`  ORDER BY `option_sizes`.`id_option` ASC"
        connection.query(sql, (err, result)=>{
            connection.release()
            if(!err){
                res.send(result)
                console.log(result)
            }else{
                console.log(err)
            }
        })
    })
}) 



app.get("/api/getProducts/", (req, res)=>{
    pool.getConnection((err, connection)=>{
        const sql = "SELECT * FROM `products`"
        connection.query(sql, (err, result)=>{
            connection.release()
            if(!err){
                res.send(result)
                console.log(result)
            }else{
                console.log(err)
            }
        })
    })
})



app.get("/api/getProductPrice/", (req, res)=>{
    pool.getConnection((err, connection)=>{
        const sql = "SELECT * FROM `product_prices`"
        connection.query(sql, (err, result)=>{
            connection.release()
            if(!err){
                res.send(result)
                console.log(result)
            }else{
                console.log(err) 
            }
        })
    })
})






app.listen(3001, () =>{
    console.log("running on port ", 3001)
})












