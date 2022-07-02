import logoUrl from '../../assets/logo.svg';
import './style.css';

const Header = () => (
  <div className="header">
    <img src={logoUrl} alt="Tesla" />
  </div>
);

export default Header;
