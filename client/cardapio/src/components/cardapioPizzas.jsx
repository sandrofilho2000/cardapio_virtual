import React, {useState, useEffect} from 'react'
import Axios from 'axios'

const Cardapio = () =>{

    const allCategories = []
    const AllProducts = []

    const[category, setCategory] =  useState([])
    const[categoryNames, setCategoryNames] =  useState([])
    const[categorySizes, setCategorySizes] =  useState([])
    const[productNames, setProductNames] = useState([])
    const[productPrices, setProductPrices] = useState([])

    useEffect(()=>{
        Axios.get(`http://127.0.0.1:3001/api/getCategoryNames`).then((result)=>{
            setCategoryNames(result.data)
        })
        Axios.get(`http://127.0.0.1:3001/api/getCategorySizes`).then((result)=>{
            setCategorySizes(result.data)
        })
        Axios.get(`http://127.0.0.1:3001/api/getProducts`).then((result)=>{
            setProductNames(result.data)
        })
        Axios.get(`http://127.0.0.1:3001/api/getProductPrice`).then((result)=>{
            setProductPrices(result.data)
        })
    }, [])

                                

    categoryNames.map((categorySingle, index)=>{

        const sizes = []

        categorySizes.map((size, index)=>{
            if(size.id_option == categorySingle.id){
                sizes.push(size.name)
            }
        })
        allCategories.push({...categorySingle, sizes: [...sizes]})
    })


    productNames.map((product, index)=>{
        const prices = []
        productPrices.map((price, index)=>{
            if(price.id_produto == product.id){
                prices.push(price.price)
            }
        })

        AllProducts.push({...product, prices: [...prices]})
    })

    console.log(AllProducts)

    return (
        <>
            {allCategories.map((categorySingle, index)=>{

                var sizes = ``
                
                return (

                    <table>
                        <h2>
                            { categorySingle.name }
                        </h2>

                        {categorySingle.sizes.map((size)=>{
                            return (<th>{size}</th>)
                        })}

                    </table>
                

                )
            })}
        </>
    )
}

export default Cardapio