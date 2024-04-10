import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { useBookmarksContext } from "../lib/hooks";

type BookmarkIconProps = {
  id: number;
};

export default function BookmarkIcon({ id }: BookmarkIconProps) {
  const { bookmarkedIds, handleToggleBookmark } = useBookmarksContext();
  const [renderKey, setRenderKey] = useState(0); // State variable for triggering re-render

  const bookmarked = bookmarkedIds.includes(id);

  return (
    <button
      onClick={(e) => {
        handleToggleBookmark(id);
        setRenderKey((prevKey) => prevKey + 1);

        e.stopPropagation();
        e.preventDefault();
      }}
      className="bookmark-btn"
    >
      <BookmarkFilledIcon
        key={renderKey}
        className={bookmarked ? "filled" : ""}
      />
    </button>
  );
}
