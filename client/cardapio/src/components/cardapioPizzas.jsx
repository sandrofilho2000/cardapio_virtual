import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { SearchBar } from './Search';
import logo from '../assets/imagens/logo_bgremover.png';
import aiqfome from '../assets/imagens/aiqfome.svg';
import instagram from '../assets/imagens/instagram.svg';
import openBairrosIcon from '../assets/imagens/deliveryIcon.svg';

const Cardapio = () => {


    const [category, setCategory] = useState([])

    const handleBairros = (e) =>{
        var bairrosOverlay = document.querySelector(".bairros_overlay")
        bairrosOverlay.classList.contains("active") ? bairrosOverlay.classList.remove("active") : bairrosOverlay.classList.add("active")
    }

    useEffect(() => {
        Axios.get(`http://127.0.0.1:3001/api/getCategories`).then((result) => {
            setCategory(result.data)
        })
    }, [])



    return (
        <>
            <div className='wrapper'>

                <SearchBar/>
                <div onClick={handleBairros} className='openBairros'>
                    <img src={openBairrosIcon} />
                </div>

                <div className='cardapio_wrapper'>
                    <div className='cardapio_container'>
                        <div className='logo_container'>
                            <img src={logo} className="img_logo" />
                        </div>


                        {category.map((category_single, index) => {


                            return (

                                <table>
                                    <h2>
                                        {category_single.name}
                                    </h2>

                                    {category_single.sizes.map((size) => {
                                        return (<th>{size}</th>)
                                    })}


                                    {category_single.products.map((product) => {
                                        return (
                                            <tr>
                                                <td>
                                                    {product.name}
                                                    <p className='td_p_components'>
                                                        {product.description}
                                                    </p>
                                                </td>

                                                {product.prices.map((price) => {
                                                    return (
                                                        <td>{price}</td>
                                                    )
                                                })}
                                            </tr>
                                        )
                                    })}




                                </table>


                            )
                        })}


                    </div>
                    <div className='infos'>
                        <div className='left'>
                            <p className="address">
                                R. Sábino José Ferreira, 719 - Carmo, Barbacena - MG, 36200-656
                            </p>
                            <p className="tel">
                                3333-3333
                            </p>
                        </div>
                        <div className='right'>
                            <p className="instagram">
                                <a target="_blank" href="https://www.instagram.com/pizzariareal.bq/">
                                    pizzariareal.bq
                                </a>
                                <img src={instagram} />
                            </p>
                            <p className="aiqfome">
                                <a target="_blank" href="https://aiqfome.com/MG/barbacena/pizzaria-real">
                                    Pizzaria Real
                                </a>
                                <img src={aiqfome} />
                            </p>
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}

export default Cardapio