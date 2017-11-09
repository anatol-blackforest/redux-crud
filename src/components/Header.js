import React from 'react';
import menu from '../data/menu';
//меню-хедер
export default function(props){
    const headerMenu = menu.map((item, index) => {
        return <li key={index} className={item.active ? "active" : null}>
            <a href=".">{item.title}</a>
        </li>
    });
    return <header>
        <nav>
            <ul>
                {headerMenu}
            </ul>
        </nav>
    </header>
}
