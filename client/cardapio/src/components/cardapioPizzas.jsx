import React, {useState, useEffect} from 'react'
import Axios from 'axios'

const Cardapio = () =>{
    const[categories, setCategories] =  useState([])
    const[mixedCategories, setMixedCategories] =  useState([])
    useEffect(()=>{
        Axios.get('http://127.0.0.1:3001/api/getCategories').then((result)=>{
            setCategories(result.data)
        })
    }, [])


    categories.map((category, index)=>{
        Axios.get('http://127.0.0.1:3001/api/getSizes', {id_option: category.id}).then((result)=>{
            setMixedCategories(result.data)
            console.log(category.id)
        })
    })
    return (
        <>
            {categories.map((category, index)=>{
                return (

                    <table>
                        <h2>
                            { category.name }
                        </h2>
                    </table>
                

                )
            })}
        </>
    )
}

export default Cardapio