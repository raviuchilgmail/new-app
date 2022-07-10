import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = ({
  itemsCount,
  pageSize,
  currentPage,
  onPageChange,
  onPreviousPage,
  onNextPage,
  onFirstPage,
  onLastPage,
}) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1 || pagesCount === 0) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav>
      <ul className="pagination">
        <li
          className={
            currentPage === 1 ? "page-item disabled" : "page-item clickable"
          }
        >
          <a className="page-link" onClick={onFirstPage}>
            First
          </a>
        </li>
        <li
          className={
            currentPage === 1 ? "page-item disabled" : "page-item clickable"
          }
        >
          <a className="page-link" onClick={onPreviousPage}>
            Prev
          </a>
        </li>
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
            style={{ cursor: "pointer" }}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
        <li
          className={
            currentPage === pagesCount ? "page-item disabled" : "page-item"
          }
          style={
            currentPage === pagesCount ? { cursor: "" } : { cursor: "pointer" }
          }
        >
          <a className="page-link" onClick={onNextPage}>
            Next
          </a>
        </li>
        <li
          className={
            currentPage === pagesCount ? "page-item disabled" : "page-item"
          }
          style={
            currentPage === pagesCount ? { cursor: "" } : { cursor: "pointer" }
          }
        >
          <a className="page-link" onClick={() => onLastPage(pagesCount)}>
            Last
          </a>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onPreviousPage: PropTypes.func.isRequired,
  onNextPage: PropTypes.func.isRequired,
  onFirstPage: PropTypes.func.isRequired,
  onLastPage: PropTypes.func.isRequired,
};

export default Pagination;
