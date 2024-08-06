import "./pagination.scss";

const Pagination = ({ postsPerPage, allPosts, pagination, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

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

        {pageNumbers?.map((number) => (
          <li key={number}>
            <button
              className="pag-btn-num"
              onClick={() => pagination(number)}
            >
              {number}
            </button>
          </li>
        ))}

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
