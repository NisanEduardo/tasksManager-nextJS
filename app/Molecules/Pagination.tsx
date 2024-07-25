import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesLeft,
  faAngleLeft,
  faAnglesRight,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

import { useTaskStore } from "../store/tasksStore";
import { ITEMS_PER_PAGE } from "../custom-hooks/useListTasks";
import { useEffect } from "react";

const paginationRange = (pageNumbers: number) => {
  const length = pageNumbers;
  return Array.from({ length }, (_, index) => index + 1);
};

export const Pagination = () => {
  const { tasksStoraged, setCurrPage } = useTaskStore();

  const pagesQty = Math.ceil(tasksStoraged.length / ITEMS_PER_PAGE);

  const handleChangePage = (page: number) => {
    setCurrPage(page);
  };

  return (
    <div>
      <ul className="[&>li]:inline-block [&>li]:m-1">
        <li>
          <FontAwesomeIcon icon={faAnglesLeft} />
        </li>
        <li>
          <FontAwesomeIcon icon={faAngleLeft} />
        </li>

        {paginationRange(pagesQty).map((number) => (
          <li key={number}>
            <button type="button" onClick={() => handleChangePage(number)}>
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
    </div>
  );
};
