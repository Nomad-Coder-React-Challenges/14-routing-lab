import { Outlet } from 'react-router-dom';
import NavMenu from '../src/components/common/NavMenu';
import './styles.css';

export default function App() {
  return (
    <div className='App'>
      <NavMenu />
      <Outlet />
    </div>
  );
}
