import React from 'react';
import menu from './data/menu';
//меню-хедер
export default function(){
    const headerMenu = menu.map((item) => {
        return <li class={item.active ? "active" : null}>
            <a href="#">{item.title}</a>
        </li>
    })
    return 	<header>
        <nav>
            <ul>
                {headerMenu}
            </ul>
        </nav>
    </header>
}
