import { DigiLayoutContainer, DigiNavigationPagination } from "@digi/arbetsformedlingen-react";
import "../styles/pagination.css";

interface PaginationProps {
    currentPage: number;
    setCurrentPage: (page: number) => void;
    itemsPerPage: number;
    totalItems: number;
  }

export const Pagination = ({
    currentPage,
    setCurrentPage,
    itemsPerPage,
    totalItems,
  }: PaginationProps) => {

    const pageCount = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber - 1); 
  };
  

  return (
    <DigiLayoutContainer  afNoGutter afVerticalPadding>
    <DigiNavigationPagination
    afTotalPages={pageCount}
    afInitActivePage={currentPage + 1} 
    afCurrentResultStart={currentPage * itemsPerPage + 1}
    afCurrentResultEnd={Math.min((currentPage + 1) * itemsPerPage, totalItems)}
    afTotalResults={totalItems}
    afResultName="annonser"
    onAfOnPageChange={(e) => handlePageChange(e.detail)}
    />
    </DigiLayoutContainer>
  );
};
