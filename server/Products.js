const mongoose = require("mongoose")

var Schema = mongoose.Schema

const ProductSchema = new Schema({
    id: Number,
    id_category: Number,
    name: String,
    products: [],
    ingredients: String,
    prices: []
}, {collection: 'products'})

var Products = mongoose.model('products', ProductSchema)
module.exports = Products