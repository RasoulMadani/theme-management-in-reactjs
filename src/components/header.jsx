const Header = () => {
  return (
    <header
      className="navbar navbar-expand bg-secondary navbar-light shadow-sm"
      style={{ width: "100vw" }}
    >
      <div className="container">
        <ul className="navbar-nav">
          <li className="navbar-item">
            <a href="" className="nav-link">
              صفحه اصلی
            </a>
          </li>
          <li className="navbar-item">
            <a href="" className="nav-link">
              محصولات ما
            </a>
          </li>
          <li className="navbar-item">
            <a href="" className="nav-link">
              محصولات ما
            </a>
          </li>
          <li className="navbar-item">
            <a href="" className="nav-link">
              ارتباط با ما
            </a>
          </li>
        </ul>
        <button className="btn btn-dark" type="button">
          تاریک
        </button>
      </div>
    </header>
  );
};

export default Header;
