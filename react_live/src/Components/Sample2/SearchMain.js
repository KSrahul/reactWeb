// import React, { useState } from 'react'
// import SearchCss from '../Sample2/Search.css'
// import SearchView from './SearchView'
// import SearchDataaa from './SearchData'
// import SearchData from './SearchData'
// import SearchItems from './SearchItems'
// const Example2 = () => {
//     const [inputVal, inputValFun] = useState("");
//     // const [SearchDatas, SearchDataFun] = useState(SearchData);
//     // const [SearchDatassss, SearchDataDefault] = useState(SearchData);
//     const [SearchDatas, SearchDataFun] = useState(SearchDataaa);
//     const InputValChange = (valInput) => {
//         const valueSearch = valInput.target.value.toLowerCase();
//         inputValFun(valueSearch)
//         const someName = SearchDataaa.filter((searchItems, valIndex) =>{
//             if(searchItems.includes(valueSearch)){
//                 return searchItems;
//             }
//         })
//         // console.log(someName);

//         // // SearchDataFun(someName);
//         // console.log(SearchDatas)
//     }
//     return(
//         <>
//             <SearchView InputValChange={InputValChange} toggleIcon={inputVal.length}></SearchView>
//             <SearchItems allItems={SearchData}></SearchItems>
//         </>
//     )
// }

// export default Example2