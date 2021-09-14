import React, { useState } from 'react'
import SearchCss from '../Sample2/Search.css'
import SearchView from './SearchView'
import SearchData from './SearchData'
import SearchItems from './SearchItems'
const Example2 = () => {
    const [inputVal, inputValFun] = useState("");

    const InputValChange = (valInput) => {
        inputValFun(valInput.target.value)
    }
    return(
        <>
            <SearchItems allItems={SearchData}></SearchItems>
            <SearchView InputValChange={InputValChange} toggleIcon={inputVal.length}></SearchView>
        </>
    )
}

export default Example2