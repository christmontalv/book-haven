import { useState } from 'react';

export const usePagination = <T>(elements: T[], elementsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(1);

  const onNextPage = () => {
    setCurrentPage((val) => val + 1);
  };

  const onPreviousPage = () => {
    setCurrentPage((val) => val - 1);
  };

  const lastIndexElement = elementsPerPage * currentPage;
  const firstIndexElement = lastIndexElement - elementsPerPage;
  const elementsToShow = elements.slice(firstIndexElement, lastIndexElement);
  const isTheFirstPage = currentPage === 1;
  const isTheLastPage =
    currentPage === Math.ceil(elements.length / elementsPerPage);

  return {
    currentPage,
    elementsToShow,
    onNextPage,
    onPreviousPage,
    isTheFirstPage,
    isTheLastPage,
  };
};
