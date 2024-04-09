import { useState, createContext, useEffect } from "react";

export const BookmarksContext = createContext(null);

export default function BookmarksContextProvider({ children }) {
  const [bookdmarkedIds, setBookdmarkedIds] = useState<number[]>([]);
  console.log(bookdmarkedIds);

  const handleToggleBookmark = (id: number) => {
    if (bookdmarkedIds.includes(id)) {
      setBookdmarkedIds((prev) => prev.filter((item) => item !== id));
    } else {
      setBookdmarkedIds((prev) => [...prev, id]);
    }
  };

  useEffect(() => {
    localStorage.setItem("bookmarkedIds", JSON.stringify(bookdmarkedIds));
  }, [bookdmarkedIds]);

  return (
    <BookmarksContext.Provider
      value={{
        bookdmarkedIds,
        handleToggleBookmark,
      }}
    >
      {children}
    </BookmarksContext.Provider>
  );
}
