const mongoose = require("mongoose")
const Products = require("./Products")

const Schema = mongoose.Schema

const CategoriesSchema = new Schema ({

}, {collection: 'categories'})

const Categories = mongoose.model("categories", CategoriesSchema)

module.exports = Categories