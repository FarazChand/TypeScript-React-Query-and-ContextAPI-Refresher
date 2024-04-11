import { useJobItemsContext } from "../lib/hooks";
import { SortBy } from "../lib/types";

export default function SortingControls() {
  const { sortBy, handleChangeSortBy } = useJobItemsContext();

  return (
    <section className="sorting">
      <i className="fa-solid fa-arrow-down-short-wide"></i>

      <SortingButton onClick={handleChangeSortBy} sortBy={sortBy}>
        relevant
      </SortingButton>
      <SortingButton onClick={handleChangeSortBy} sortBy={sortBy}>
        recent
      </SortingButton>
    </section>
  );
}

type SortingButtonProps = {
  children: React.ReactNode;
  onClick: (children: SortBy) => void;
  sortBy: SortBy;
};

function SortingButton({ onClick, sortBy, children }: SortingButtonProps) {
  return (
    <button
      onClick={() => onClick(children as SortBy)}
      className={`sorting__button sorting__button--${children} ${
        sortBy === children ? "sorting__button--active" : ""
      }`}
    >
      {children}
    </button>
  );
}
