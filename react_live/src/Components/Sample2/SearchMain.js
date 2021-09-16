import React, { useState } from 'react'
import SearchCss from '../Sample2/Search.css'
import JsonSearchData from './SearchData.json'
import SearchItems from './SearchItems'
import InputSearchView from './InputSearchView'
const SearchMain = () => {
    const [filterSearchData, setSearchData] = useState(JsonSearchData);
    const InputValueChange = (valInput) => {
        const searchText = valInput.target.value.toLowerCase();
        const newSearchData = JsonSearchData.filter((value) => {
            const findState = value.statename.toLowerCase();
            return findState.includes(searchText);
        });
        
        setSearchData(newSearchData);
    }
    return(
        <div className="search_main">
            <div className="indian_sta">Type.. any state name of India.</div>
            <div className="relative">

                <InputSearchView 
                    InputValChange={InputValueChange}
                    searchIconToggle={filterSearchData}>
                 </InputSearchView>

                <SearchItems 
                    searchItemsData={filterSearchData}>
                </SearchItems>
                
            </div>
        </div>
    )
}


export default SearchMain