import React from 'react';
//рендер поиска (центральная панель)
export default function(props){
    return <div className="row adder">
        <form>
            <input 
                ref={props.search} 
                onChange={props.searchHandler} 
                type="text" 
                placeholder="Search Diagnoses" 
            />
            <button onClick={props.emptyHandler}></button>
        </form>
    </div>
}
