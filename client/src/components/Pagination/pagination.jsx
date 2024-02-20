import React from 'react';
import "./pagination.css"

const Pagination = ({ currentPage, totalPages, changePage }) => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    return (
        <div>
            {currentPage > 1 && <button onClick={() => changePage(currentPage - 1)}>Previous</button>}
            {currentPage > 3 && <button onClick={() => changePage(1)}>1</button>}
            {currentPage > 3 && "..."}
            {currentPage > 2 && <button onClick={() => changePage(currentPage - 2)}>{currentPage - 2}</button>}
            {currentPage > 1 && <button onClick={() => changePage(currentPage - 1)}>{currentPage - 1}</button>}
            <button className='currentPage'> {currentPage} </button>
            {currentPage < totalPages && <button onClick={() => changePage(currentPage + 1)}>{currentPage + 1}</button>}
            {currentPage < totalPages - 1 && <button onClick={() => changePage(currentPage + 2)}>{currentPage + 2}</button>}
            {currentPage < totalPages - 2 && "..."}
            {currentPage < totalPages - 2 && <button onClick={() => changePage(totalPages)}>{totalPages}</button>}
            {currentPage < totalPages && <button onClick={() => changePage(currentPage + 1)}>Next</button>}
        </div>
    );
};

export default Pagination;
