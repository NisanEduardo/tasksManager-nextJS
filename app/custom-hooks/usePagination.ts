import { useState } from 'react'

export const usePagination = () => {
  const [currPage, setCurrPage] = useState(1);

  function handleChangePage(page: number) {
    return setCurrPage(page);
  }

  return {
    handleChangePage
  }
}