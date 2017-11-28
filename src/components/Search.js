import React from 'react';
//рендер поиска (центральная панель)
export default function(props){
    return <div className="row adder">
        <form ref={props.searchForm} >
            <input 
                ref={props.searchInput} 
                onChange={props.searchHandler} 
                type="text" 
                placeholder="Search Diagnoses" 
            />
            <button onClick={props.emptyHandler}></button>
        </form>
    </div>
}
