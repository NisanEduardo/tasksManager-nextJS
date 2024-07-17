import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesLeft,
  faAngleLeft,
  faAnglesRight,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currPage: number;
  changePage: (number: number) => void;
}

const paginationRange = (pageNumbers: number) => {
  const length = pageNumbers;
  return Array.from({ length }, (_, index) => index + 1);
};

export const Pagination = ({
  totalItems,
  itemsPerPage,
  currPage,
  changePage,
}: PaginationProps) => {
  const pagesQty = Math.ceil(totalItems / itemsPerPage);

  return (
    <ul className="[&>li]:inline-block [&>li]:m-1">
      <li>
        <FontAwesomeIcon icon={faAnglesLeft} />
      </li>
      <li>
        <FontAwesomeIcon icon={faAngleLeft} />
      </li>

      {paginationRange(pagesQty).map((number) => (
        <li>
          <button type="button" onClick={() => changePage(number)}>
            {number}
          </button>
        </li>
      ))}

      <li>
        <FontAwesomeIcon icon={faAngleRight} />
      </li>
      <li>
        <FontAwesomeIcon icon={faAnglesRight} />
      </li>
    </ul>
  );
};
