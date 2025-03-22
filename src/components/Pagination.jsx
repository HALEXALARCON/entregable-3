import React from "react";
import ReactPaginate from "react-paginate";
import "./Pagination.css"; 

function Pagination({ pageCount, onPageChange }) {
  return (
    <ReactPaginate
      previousLabel={"«"}
      nextLabel={"»"}
      breakLabel={"..."}
      breakClassName={"break-me"}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      onPageChange={onPageChange}
      containerClassName={"pagination"}
      activeClassName={"active"}
      disabledClassName={"disabled"}
    />
  );
}

export default Pagination;
