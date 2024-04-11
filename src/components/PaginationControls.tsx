import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { PageDirection } from "../lib/types";
import { useJobItemsContext } from "../lib/hooks";

export default function PaginationControls() {
  const {
    currentPage,
    totalNumberOfPages,
    handleChangePage: onClick,
  } = useJobItemsContext();
  return (
    <section className="pagination">
      {currentPage > 1 && (
        <PaginationButton
          direction={"previous"}
          onClick={onClick}
          currentPage={currentPage}
        />
      )}

      {currentPage < totalNumberOfPages && (
        <PaginationButton
          direction={"next"}
          onClick={onClick}
          currentPage={currentPage}
        />
      )}
    </section>
  );
}

type PaginationButtonProps = {
  onClick: (direction: PageDirection) => void;
  direction: PageDirection;
  currentPage: number;
};

function PaginationButton({
  onClick,
  direction,
  currentPage,
}: PaginationButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick(direction);
    e.currentTarget.blur();
  };

  return (
    <button
      onClick={handleClick}
      className={`pagination__button pagination__button--${direction}`}
    >
      {direction === "previous" && (
        <>
          <ArrowLeftIcon />
          {currentPage - 1}
        </>
      )}
      {direction === "next" && (
        <>
          {currentPage + 1}
          <ArrowRightIcon />
        </>
      )}
    </button>
  );
}
