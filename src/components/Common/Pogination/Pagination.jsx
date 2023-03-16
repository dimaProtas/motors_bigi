import React, {useState} from "react";
import style from './Pagination.module.css';
import { FiRewind, FiFastForward } from "react-icons/fi"


const Pagination = ({totalCountUsers, pageSize, currentPage, onPageChenge, portionSize = 10}) => {

    let pageCount = Math.ceil(totalCountUsers / pageSize);

        let pages = [];

        for(let i=1; i <= pageCount; i++) {
            pages.push(i);
        }

    let portionCount = Math.ceil(pageCount / portionSize)    
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return (
        <div className={style.pagination}>
            {portionNumber > 1 && <FiRewind className={style.paginationPrevies} onClick={() => {setPortionNumber(portionNumber - 1)}} />}
            
            {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(p => {
                return <span className={currentPage === p && style.selectedPage}
                    onClick={(e) => { onPageChenge(p) }}>-{p}-</span>
            })}

            {portionCount > portionNumber && <FiFastForward className={style.paginationNext} onClick={() => {setPortionNumber(portionNumber + 1)}} />}
        </div>
            
    )
}

export default Pagination