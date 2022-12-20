import { useState } from "react";

function PagginationMenu({ count, step, handler }){
    const [ currentItem, setCurrentItem ] = useState(0);
    const itemsCount = Math.ceil(count / step);

    function handleNextClick(){
        if(currentItem < itemsCount){
            handler({ current: currentItem, next: currentItem + 1 })
            setCurrentItem(currentItem + 1);
        }
        else if(currentItem === itemsCount){
            handler({ current: currentItem, next: currentItem });
        }
    }

    function handlePrevClick(){
        if(currentItem > 0){
            handler({ current: currentItem, next: currentItem - 1 })
            setCurrentItem(currentItem - 1);
        }
        else if(currentItem === 0){
            handler({ current: currentItem, next: currentItem });
        }
    }

    return(
        <div className="pagginationMenu">
            {
                currentItem !== 0 && itemsCount !== 1 ?  //currentItem is 0-based, itemsCount is 1-based
                <button className="prev" onClick={handlePrevClick} >{"<"}</button>
                :
                <button className="prev" disabled >{"<"}</button>
            }
            
            {
                currentItem + 1 !== itemsCount ? //currentItem is 0-based, itemsCount is 1-based
                <button className="next" onClick={handleNextClick}>{">"}</button>
                :
                <button className="next" disabled>{">"}</button>
            }
        </div>
    )
}

export default PagginationMenu;