import React from 'react'
import SearchCss from '../Sample2/Search.css'
import SearchView from './SearchView'
import SearchData from './SearchData'
import SearchItems from './SearchItems'
const Example2 = () => {
    return(
        <>
            <SearchItems allItems={SearchData}></SearchItems>
            <SearchView></SearchView>
        </>
    )
}

export default Example2