import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  const getActiveClass = (category) => {
    const currentCategory = new URLSearchParams(location.search).get("category");

    return currentCategory === category ? "active" : "";
  };

  return (
    <header className="header">
    <div className="container header__container">
      <Link to="/" className="header__logo-link">
        <img src="image/logo.svg" alt="Логотип Cup Time" className="header__logo"/>
      </Link>

      <nav className="header__nav">
        <ul className="header__menu">
          <li className="header__menu-item">
            <Link to="/products?category=tea" className={`header__menu-link ${getActiveClass('tea')}`}>Чай</Link>
          </li>
          <li className="header__menu-item">
            <Link to="/products?category=coffee" className={`header__menu-link ${getActiveClass('coffee')}`}>Кофе</Link>
          </li>
          <li className="header__menu-item">
            <Link to="/products?category=teapots" className={`header__menu-link ${getActiveClass('teapots')}`}>Чайники</Link>
          </li>
          <li className="header__menu-item">
            <Link to="/products?category=cezves" className={`header__menu-link ${getActiveClass('cezves')}`}>Турки</Link>
          </li>
          <li className="header__menu-item">
            <Link to="/products?category=other" className={`header__menu-link ${getActiveClass('other')}`}>Прочее</Link>
          </li>
        </ul>
      </nav>

      <Link to="cart" className="header__cart-link">10</Link>
      <nav className="burger__nav">
        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="0.5" width="20" height="1" fill="#D9D9D9" />
        <rect y="5.5" width="20" height="1" fill="#D9D9D9" />
        <rect y="10.5" width="20" height="1" fill="#D9D9D9" />
        </svg>
      </nav>
    </div>
  </header>
  );
};