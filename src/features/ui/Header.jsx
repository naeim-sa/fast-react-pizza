import { Link } from 'react-router-dom';
import SearchOrder from '../order/SearchOrder';

function Header() {
  return (
    <header className="bg-yellow-500">
      <Link to="/">Fast React Pizza Co.</Link>

      <SearchOrder />

      <p>Naeim</p>
    </header>
  );
}

export default Header;
