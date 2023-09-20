import NavMenu from "../../components/common/NavMenu";
import { AUTHOR_MENU } from "../../constants";

const HomePage = () => {
  return (
    <div>
      <h1>Best Seller Authors</h1>
      <NavMenu menu={AUTHOR_MENU} />
    </div>
  );
};

export default HomePage;
