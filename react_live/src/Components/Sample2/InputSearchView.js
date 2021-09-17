const InputSearchView = (props) => {
    return(
        <>
            <input onChange={props.InputValChange} value={props.inputSetValue} className="search_input" type="text" placeholder="Search your state e.g., Haryana" />
            <div className="search_pop_icon">
                {
                    props.searchIconToggle.length > 0 ?
                        <div className="cross_icon" onClick={props.removeInputVal}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="22" viewBox="0 0 22 22">
                                <g fill="none" fillRule="evenodd">
                                    <path fill="#BDBDBD" d="M11 21C5.477 21 1 16.523 1 11S5.477 1 11 1s10 4.477 10 10-4.477 10-10 10zm.95-10l2.853-2.852a.672.672 0 10-.95-.951L11 10.049 8.148 7.197a.672.672 0 10-.951.95L10.049 11l-2.852 2.852a.672.672 0 00.95.951L11 11.951l2.852 2.852a.672.672 0 10.951-.95L11.951 11z"></path>
                                    <path d="M0 0H22V22H0z"></path>
                                </g>
                            </svg>
                        </div>
                    :
                    <div className="search_icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="22" viewBox="0 0 22 22">
                            <g fill="none" fillRule="evenodd">
                                <path fill="#9E9E9E" fillRule="nonzero" d="M18.465 17.319l-3.728-3.81a6.13 6.13 0 001.484-3.995c0-3.426-2.838-6.214-6.325-6.214-3.488 0-6.325 2.788-6.325 6.214 0 3.426 2.837 6.214 6.325 6.214 1.309 0 2.557-.388 3.623-1.124l3.757 3.838c.157.16.368.249.595.249.214 0 .417-.08.571-.226a.801.801 0 00.023-1.146zM9.895 4.92c2.578 0 4.676 2.06 4.676 4.593s-2.098 4.593-4.675 4.593c-2.578 0-4.675-2.06-4.675-4.593s2.097-4.593 4.675-4.593z"></path>
                                <path d="M0 0H22V22H0z"></path>
                            </g>
                        </svg>
                    </div>
                }
            </div>
        </>
    )
}
export default InputSearchView