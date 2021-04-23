import React from 'react';

function Tabs() {
    function tabsClick(clickEv) {
        console.log(clickEv)
    }

    return(
        <>
            <div>
                <div onClick={tabsClick} className="tabsBtn">Tabs1</div>
                <div onClick={tabsClick} className="tabsBtn">Tabs2</div>
                <div onClick={tabsClick} className="tabsBtn">Tabs3</div>
                <div onClick={tabsClick} className="tabsBtn">Tabs4</div>
            </div>
        </>
    );
};

export default Tabs;