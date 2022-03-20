import React, {useState, useEffect} from 'react'
import  SeachIconIcon  from '../assets/imagens/SearchIcon.svg'
import  CloseSearchIcon  from '../assets/imagens/CloseSearch.svg'


export const SearchBar = () =>{

    const [searchIcon, setSearchIcon] = useState(true)

    const handleSearch = (e) =>{

        var valor = e.target.value
        valor = valor.replaceAll(' ', '===')
        var replace = `${valor}\\w`;
        var re = new RegExp(replace,"gi");
    
        var td_array = document.querySelectorAll("table td:first-of-type")
        td_array.forEach((td)=>{
            var product_nome = td.innerText 
            product_nome += 'wyx'
            product_nome = product_nome.trim().replaceAll(' ', '===')
            if(!re.test(product_nome)){
                td.closest('tr').style.display = 'none' 
                td.closest('tr').setAttribute("hide", "true")
            }else{
                td.closest('tr').style.display = 'table-row' 
                td.closest('tr').setAttribute("hide", "false")
            }
        }) 

        var table_array = document.querySelectorAll("table")
        console.log("\n\n")
        table_array.forEach((table)=>{
            var tr_array = table.querySelectorAll('tr[hide=false]')
            tr_array.length == 0 ? table.style.display = 'none' : table.style.display = 'table'
        })

    }

    const handleSearchIcon = () =>{
        searchIcon == false ? setSearchIcon(true) : setSearchIcon(false)
    }

    return (
        <div className={searchIcon ? 'searchBarWrapper' : 'searchBarWrapper active'} >
            <div onClick={handleSearchIcon} className='searchBarIcon'>
                <img src={searchIcon ? SeachIconIcon : CloseSearchIcon} alt="" />
            </div>
            <input type="text" onChange={handleSearch} placeholder='Pesquise por sabor ou ingrediente...' />
        </div>
    )
}