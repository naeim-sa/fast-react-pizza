import { Link } from 'react-router-dom';

import SearchOrder from '../order/SearchOrder';
import UserName from '../user/UserName';

function Header() {
  return (
    <header className="bg-yellow-500 uppercase">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>

      <SearchOrder />

      <UserName />
    </header>
  );
}

export default Header;
