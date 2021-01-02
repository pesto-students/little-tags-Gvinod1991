import React from 'react';
import './pagination.scss';

export default function Pagination({
  currentPage,
  pageNumbers,
  handleCurrentPageChange,
}) {
  return (
    <div className="pagination-center">
      {pageNumbers && pageNumbers.length > 0 && (
        <div className="pagination">
          <a
            href="#/"
            onClick={() =>
              currentPage > 1 ? handleCurrentPageChange(currentPage - 1) : {}
            }
          >
            &laquo;Previous
          </a>
          {pageNumbers.map((pageNumber) => {
            return (
              <a
                key={pageNumber}
                href="#/"
                className={pageNumber === currentPage ? 'active' : ''}
                onClick={() => handleCurrentPageChange(pageNumber)}
              >
                {pageNumber}
              </a>
            );
          })}
          <a
            href="#/"
            onClick={() =>
              currentPage < pageNumbers.length
                ? handleCurrentPageChange(currentPage + 1)
                : {}
            }
          >
            Next &raquo;
          </a>
        </div>
      )}
    </div>
  );
}
