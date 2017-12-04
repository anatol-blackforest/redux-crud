import React from 'react';
//рендер поиска (центральная панель)
export default function(props){
    return <div className="row adder">
        <form>
            <input 
                onChange={props.searchHandler} 
                type="text" 
                placeholder="Search Diagnoses" 
            />
            <input type="reset" onClick={props.emptyHandler} defaultValue="" />
        </form>
    </div>
}
