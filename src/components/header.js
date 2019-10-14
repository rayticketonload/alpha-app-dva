import { Link } from 'react-router-dom';
import Logo from '@assets/img/logo.png';

const AppHeader = () => {
  return (
    <div className="app-header">
      <div className="header-content">
        <div className="header-content-left">
          <Link className="logo-box" to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        {/* <div className="header-content-right"></div> */}
      </div>
    </div>
  );
};

export default AppHeader;
