import "./pagination.scss";

const Pagination = ({ pageSize, appointments, currentPage, pagination }) => {
  const pageNumbers = [];
  // for (let i = 1; i <= Math.ceil(appointments.length / pageSize); i++) {
  //   pageNumbers.push(i);
  // }
  // const totalPages = pageNumbers.length;

  return (
    <div className="pag-wrapper">
      <ul className="pag-ul">
        <button
          className="pag-button-left"
          onClick={() => pagination(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <span className="pag-button-text">Previous</span>
        </button>

        {/* {pageNumbers?.map((number) => ( */}
        <li>
          <button className="pag-btn-num"
          // className={`pag-btn-num
          //  ${
          //    currentPage === number
          //      ? " pag-btn-num"
          //      : ""
          //  }`}

          // onClick={() => pagination(number)}
          >
            1
          </button>
        </li>
        <li>
          <button className="pag-btn-num">2</button>
        </li>
        {/* ))} */}

        <li>
          <button
            className="pag-button-right"
            onClick={() => pagination(currentPage + 1)}
            disabled={currentPage === pageNumbers.length}
          >
            <span className="pag-button-text">Next</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
