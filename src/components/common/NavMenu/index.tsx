import { Link } from 'react-router-dom';
import { NavMenuModel } from '../../../model';
import { HOME_MENU } from '../../../constants';

interface NavMenuProps {
  menu?: NavMenuModel[];
}

const NavMenu = ({ menu = HOME_MENU }: NavMenuProps) => {
  return (
    <div>
      <ul>
        {menu?.map(menu => (
          <Link to={menu.link} key={menu.name}>
            <li>{menu.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default NavMenu;
