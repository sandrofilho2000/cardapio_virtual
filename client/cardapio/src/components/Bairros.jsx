import React, { useState, useEffect } from 'react'
import CloseSearchIcon  from '../assets/imagens/CloseSearch.svg'

const Bairros = () =>{

    const handleBairros = (e) =>{
        var bairrosOverlay = document.querySelector(".bairros_overlay")
        bairrosOverlay.classList.contains("active") ? bairrosOverlay.classList.remove("active") : bairrosOverlay.classList.add("active")
    }

    const preventingDefault = (e) =>{
        e.stopPropagation()
    }

    return (
        <div onClick={handleBairros} className="bairros_overlay" >
            <div onClick={preventingDefault} className="bairros_wrapper">
                <div className="close_overlay">
                    <img onClick={handleBairros} src={CloseSearchIcon}/>
                </div>
                <h2>Taxas de Entrega</h2>
                <table>
                    <tr>
                        <td>Água Santa</td>
                        <td>R$ 8,00</td>                
                    </tr>
                    <tr>
                        <td>Andaraí</td>
                        <td>R$ 5,00</td>                
                    </tr>
                    <tr>
                        <td>Belvedere</td>
                        <td>R$ 5,00</td>                
                    </tr>
                    <tr>
                        <td>Boa Morte</td>
                        <td>R$ 5,00</td>                
                    </tr>
                    <tr>
                        <td>Boa Vista</td>
                        <td>R$ 5,00</td>                
                    </tr>
                    <tr>
                        <td>Bom Pastor</td>
                        <td>R$ 5,00</td>                
                    </tr>
                    <tr>
                        <td>Caiçaras</td>
                        <td>R$ 6,00</td>                
                    </tr>
                    <tr>
                        <td>Caminho Novo</td>
                        <td>R$ 5,00</td>                
                    </tr>
                    <tr>
                        <td>Campo</td>
                        <td>R$ 5,00</td>                
                    </tr>
                    <tr>
                        <td>Carmo</td>
                        <td>grátis</td>                
                    </tr>
                    <tr>
                        <td>Centro</td>
                        <td>R$ 5,00</td>                
                    </tr>
                    <tr>
                        <td>Chácaras das Andorinhas</td>
                        <td>R$ 5,00</td>                
                    </tr>
                    <tr>
                        <td>Colônia Rodrigo Silva</td>
                        <td>R$ 10,00</td>                
                    </tr>
                    <tr>
                        <td>Correia de Almeida - Centro</td>
                        <td>R$ 45,00</td>                
                    </tr>
                    <tr>
                        <td>Diniz</td>
                        <td>R$ 5,00</td>                
                    </tr>
                    <tr>
                        <td>Diniz II</td>
                        <td>R$ 5,00</td>                
                    </tr>
                    <tr>
                        <td>Dom Bosco</td>
                        <td>R$ 5,00</td>                
                    </tr>
                    <tr>
                        <td>Eucisa</td>
                        <td>R$ 6,00</td>                
                    </tr>
                    <tr>
                        <td>Fátima</td>
                        <td>R$ 5,00</td>                
                    </tr>
                    <tr>
                        <td>Floresta</td>
                        <td>R$ 6,00</td>                
                    </tr>
                    <tr>
                        <td>Funcionários</td>
                        <td>R$ 5,00</td>                
                    </tr>
                    <tr>
                        <td>Galego</td>
                        <td>R$ 16,00</td>                
                    </tr>
                    <tr>
                        <td>Greenville</td>
                        <td>R$ 8,00</td>                
                    </tr>
                    <tr>
                        <td>Grogotó</td>
                        <td>R$ 5,00</td>                
                    </tr>
                    <tr>
                        <td>Guarani</td>
                        <td>R$ 7,00</td>                
                    </tr>
                    <tr>
                        <td>Hospital Regional [SAMU]</td>
                        <td>R$ 7,00</td>                
                    </tr>
                    <tr>
                        <td>Hotel Morada do Imperador</td>
                        <td>R$ 20,00</td>                
                    </tr>
                    <tr>
                        <td>Ibiapaba</td>
                        <td>R$ 5,00</td>                
                    </tr>
                    <tr>
                        <td>Ipanema</td>
                        <td>R$ 5,00</td>                
                    </tr>
                    <tr>
                        <td>Jardim</td>
                        <td>R$ 5,00</td>                
                    </tr>
                    <tr>
                        <td>João Paulo II</td>
                        <td>R$ 9,00</td>                
                    </tr>
                    <tr>
                        <td>Mansões</td>
                        <td>R$ 5,00</td>                
                    </tr>
                    <tr>
                        <td>Marino Ceolin</td>
                        <td>R$ 5,00</td>                
                    </tr>
                    <tr>
                        <td>Monsenhor Mário Quintão</td>
                        <td>R$ 5,00</td>                
                    </tr>
                    <tr>
                        <td>Monte Mário</td>
                        <td>R$ 5,00</td>                
                    </tr>
                    <tr>
                        <td>Nossa Senhora Aparecida</td>
                        <td>R$ 5,00</td>                
                    </tr>
                    <tr>
                        <td>Nova Suíça</td>
                        <td>R$ 7,00</td>                
                    </tr>
                    <tr>
                        <td>Novo Horizonte</td>
                        <td>R$ 5,00</td>                
                    </tr>
                    <tr>
                        <td>Padre Cunha</td>
                        <td>R$ 5,00</td>                
                    </tr>
                    <tr>
                        <td>Panorama</td>
                        <td>R$ 5,00</td>                
                    </tr>
                    <tr>
                        <td>Park Hotel Mantiqueira</td>
                        <td>R$ 18,00</td>                
                    </tr>
                    <tr>
                        <td>Passarinhos</td>
                        <td>R$ 5,00</td>                
                    </tr>
                    <tr>
                        <td>Ponte do Cosme</td>
                        <td>R$ 10,00</td>                
                    </tr>
                    <tr>
                        <td>Ponte do Cosme - Vila Sofia</td>
                        <td>R$ 12,00</td>                
                    </tr>
                    <tr>
                        <td>Pontilhão</td>
                        <td>R$ 5,00</td>                
                    </tr>
                    <tr>
                        <td>Posto garanhão</td>
                        <td>R$ 12,00</td>                
                    </tr>
                    <tr>
                        <td>Retiro das Rosas</td>
                        <td>R$ 8,00</td>                
                    </tr>
                    <tr>
                        <td>Rivelli</td>
                        <td>R$ 6,00</td>                
                    </tr>
                    <tr>
                        <td>Roman</td>
                        <td>R$ 10,00</td>                
                    </tr>
                    <tr>
                        <td>Roselanche</td>
                        <td>R$ 15,00</td>                
                    </tr>
                    <tr>
                        <td>Santa Cecília</td>
                        <td>R$ 5,00</td>                
                    </tr>
                    <tr>
                        <td>Santa Efigênia</td>
                        <td>R$ 5,00</td>                
                    </tr>
                    <tr>
                        <td>Santa Luzia</td>
                        <td>R$ 5,00</td>                
                    </tr>
                    <tr>
                        <td>Santa Tereza I</td>
                        <td>R$ 5,00</td>                
                    </tr>
                    <tr>
                        <td>Santa Tereza II</td>
                        <td>R$ 5,00</td>                
                    </tr>
                    <tr>
                        <td>Santo Antônio</td>
                        <td>R$ 6,00</td>                
                    </tr>
                    <tr>
                        <td>São Cristóvão</td>
                        <td>R$ 5,00</td>                
                    </tr>
                    <tr>
                        <td>São Francisco</td>
                        <td>R$ 6,00</td>                
                    </tr>
                    <tr>
                        <td>São Geraldo</td>
                        <td>R$ 5,00</td>                
                    </tr>
                    <tr>
                        <td>São Jorge</td>
                        <td>R$ 5,00</td>                
                    </tr>
                    <tr>
                        <td>São José</td>
                        <td>R$ 5,00</td>                
                    </tr>
                    <tr>
                        <td>São Pedro</td>
                        <td>R$ 5,00</td>                
                    </tr>
                    <tr>
                        <td>São Sebastião</td>
                        <td>R$ 5,00</td>                
                    </tr>
                    <tr>
                        <td>São Vicente de Paula</td>
                        <td>R$ 6,00</td>                
                    </tr>
                    <tr>
                        <td>Serra Verde</td>
                        <td>R$ 5,00</td>                
                    </tr>
                    <tr>
                        <td>Vale das Rosas</td>
                        <td>R$ 6,00</td>                
                    </tr>
                    <tr>
                        <td>Valentim Prenassi</td>
                        <td>R$ 5,00</td>                
                    </tr>
                    <tr>
                        <td>Vilela</td>
                        <td>R$ 5,00</td>                
                    </tr>
                    <tr>
                        <td>Vista Alegre</td>
                        <td>R$ 6,00</td>                
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Bairros



