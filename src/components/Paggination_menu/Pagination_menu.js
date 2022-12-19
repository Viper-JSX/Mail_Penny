import { useState } from "react";

function PagginationMenu({ count, step, handler }){
    const [ currentItem, setCurrentItem ] = useState(0);
    const itemsCount = Math.ceil(count / step);
    console.log(count, step, itemsCount)

    return(
        <ul className="pagginationMenu">
            {
                Array(itemsCount).fill(0, itemsCount).map((item, index) => <li>{index + 1}</li>)
            }
        </ul>
    )
}

export default PagginationMenu;