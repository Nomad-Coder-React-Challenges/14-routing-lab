import { useParams, Outlet } from "react-router-dom";
import NavMenu from "#components/common/NavMenu";
import { ROWLING_MENU, TOLKIEN_MENU } from "#src/constants";

const NamePage = () => {
  const params = useParams();
  const currentPath = params?.name;

  return (
    <div>
      <h1>{currentPath}</h1>
      <NavMenu
        menu={currentPath === "J.K.Rowling" ? ROWLING_MENU : TOLKIEN_MENU}
      />
      <Outlet />
    </div>
  );
};

export default NamePage;
