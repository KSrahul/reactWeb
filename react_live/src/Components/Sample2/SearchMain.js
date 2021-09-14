import React from 'react'
import SearchCss from '../Sample2/Search.css'
import SearchView from './SearchView'
import SearchData from './SearchData'
import SearchItems from './SearchItems'
const Example2 = () => {

    const InputValChange = (event) => {
        console.log(event.target.value)
    }
    return(
        <>
            <SearchItems allItems={SearchData}></SearchItems>
            <SearchView InputValChange={InputValChange}></SearchView>
        </>
    )
}

export default Example2