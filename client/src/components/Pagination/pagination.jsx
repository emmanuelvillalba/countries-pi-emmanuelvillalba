import React from 'react';
import "./pagination.css"

const Pagination = ({ currentPage, totalPages, changePage }) => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    return (
        <div className='pagination'>
            {currentPage > 1 && <button className="btn-pagination" onClick={() => changePage(currentPage - 1)}>Previous</button>}
            {currentPage > 3 && <button className="btn-pagination" onClick={() => changePage(1)}>1</button>}
            {currentPage > 3 && <span className="dots">...</span>}
            {currentPage > 2 && <button className="btn-pagination" onClick={() => changePage(currentPage - 2)}>{currentPage - 2}</button>}
            {currentPage > 1 && <button className="btn-pagination" onClick={() => changePage(currentPage - 1)}>{currentPage - 1}</button>}
            <button className='currentPage'> {currentPage} </button>
            {currentPage < totalPages && <button className="btn-pagination" onClick={() => changePage(currentPage + 1)}>{currentPage + 1}</button>}
            {currentPage < totalPages - 1 && <button className="btn-pagination" onClick={() => changePage(currentPage + 2)}>{currentPage + 2}</button>}
            {currentPage < totalPages - 2 && <span className="dots">...</span>}
            {currentPage < totalPages - 2 && <button className="btn-pagination" onClick={() => changePage(totalPages)}>{totalPages}</button>}
            {currentPage < totalPages && <button className="btn-pagination" onClick={() => changePage(currentPage + 1)}>Next</button>}
        </div>
    );
};

export default Pagination;
