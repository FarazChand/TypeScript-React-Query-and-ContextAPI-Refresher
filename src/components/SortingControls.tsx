import { SortBy } from "../lib/types";

type SortingControlsProps = {
  onClick: (newSortBy: SortBy) => void;
  sortBy: SortBy;
};

export default function SortingControls({
  sortBy,
  onClick,
}: SortingControlsProps) {
  return (
    <section className="sorting">
      <i className="fa-solid fa-arrow-down-short-wide"></i>

      <SortingButton onClick={onClick} sortBy={sortBy}>
        relevant
      </SortingButton>
      <SortingButton onClick={onClick} sortBy={sortBy}>
        recent
      </SortingButton>
    </section>
  );
}

type SortingButtonProps = SortingControlsProps & {
  children: React.ReactNode;
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
