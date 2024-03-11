import { useState } from "react";
import style from './SearchBar.module.css'
import lupa from '../../assets/lupa.png'

function SearchBar(props) { 
   const [ id, setId ] = useState('')

   const handleChange = (event) =>{ 
      setId(event.target.value)
   }

   const handleSearch = ()=> {
      props.onSearch(id)
      setId('')
   }
   return (
      <div className={style.searchContainer}>
         <input 
            type='search' 
            value={id}
            onChange={handleChange}
            className={style.input}
            placeholder="  Search by id"
         />
         <img 
            src={lupa}
            alt="Search" 
            onClick={handleSearch} 
            className={style.image}
         />
      </div>
   );
}

export default SearchBar
