import { useState } from "react";

function PagginationMenu({ count, step, handler }){
    const [ currentItem, setCurrentItem ] = useState(0);
    const itemsCount = Math.ceil(count / step);

    function handleItemClick({ next }){
        handler({ current: currentItem, next });
        setCurrentItem(next);
    }

    return(
        <ul className="pagginationMenu">
            {
                Array(itemsCount).fill(0).map((item, index) => 
                    <li onClick={() => handleItemClick({ next: index }) } key={index}>
                        { index + 1 }
                    </li>
                )
            }
        </ul>
    )
}

export default PagginationMenu;