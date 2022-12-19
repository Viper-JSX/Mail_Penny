import { useState } from "react";

function PagginationMenu({ count, step, handler }){
    const [ currentItem, setCurrentItem ] = useState(0);
    const itemsCount = Math.ceil(count / step);

    function handleItemClick({ next }){
        handler({ current: currentItem, next });
        setCurrentItem(next);
    }

    return(
        <div className="pagginationMenu">
            <button className="prev">{"<"}</button>
            <button className="next">{">"}</button>
        </div>
    )
}

export default PagginationMenu;