import { useParams, Outlet } from "react-router-dom";
import NavMenu from "#components/common/NavMenu";
import { CHAPTER_CHARACTER_MENU } from "#src/constants";

const BookPage = () => {
  const params = useParams();
  const currentBook = params?.book;

  return (
    <div>
      <h2>{currentBook?.split("_")?.join(" ")}</h2>
      <NavMenu menu={CHAPTER_CHARACTER_MENU} />
      <Outlet />
    </div>
  );
};

export default BookPage;
