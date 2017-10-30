import React from 'react'; 
import SidebarEditor from './SidebarEditor';
import SidebarAdder from './SidebarAdder';

function Sidebar () {
    return  <aside>
        <SidebarEditor />
        <SidebarAdder />
    </aside>
}

export default Sidebar;
