import React, { useState } from 'react'
import {} from '../SearchPage/Search.css'
import JsonSearchData from './SearchData.json'
import SearchItems from './SearchItems'
import InputSearchView from './InputSearchView'
const SearchMain = () => {
    const [filterSearchData, setSearchDataFun] = useState([]);
    const [wordEnter, wordEnterFun] = useState("");
    const InputValueChange = (valInput) => {
        const searchText = valInput.target.value.toLowerCase();
        wordEnterFun(searchText);
        const newSearchData = JsonSearchData.filter((value) => {
            const findState = value.statename.toLowerCase();
            return findState.includes(searchText);
        });
        
        searchText === "" ? setSearchDataFun([]) : setSearchDataFun(newSearchData);
    }
    const removeInputVal = () => {
        setSearchDataFun([]);
        wordEnterFun("");
    }
    const hoverText = (hoverVal) => {
        wordEnterFun(hoverVal);
    }

    return(
        <div className="search_main">
            <div className="indian_sta">Type.. any state name of India.</div>
            <div className="relative">

                <InputSearchView 
                    InputValChange={InputValueChange}
                    removeInputVal={removeInputVal}
                    inputSetValue={wordEnter}>
                 </InputSearchView>

                <SearchItems 
                    searchItemsData={filterSearchData}
                    onHover={hoverText}>
                </SearchItems>
                
            </div>
            {
                wordEnter.length > 0 && filterSearchData.length === 0 ?
                    <>
                        <div className="show_error">No Result Found :(</div>
                    </>
                : false
            }
        </div>
    )
}


export default SearchMain