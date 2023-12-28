import { Outlet, NavLink } from "react-router-dom";

const MainLayout = () => {
  return (
    <main className="page-wrapper">
      <header className="header navbar navbar-expand-lg navbar-dark position-absolute navbar-sticky">
        <div className="container px-3">
          <NavLink to="/" className="navbar-brand pe-3">
            OpenAi
          </NavLink>
          <div id="navbarNav" className="offcanvas offcanvas-end bg-dark">
            <div className="offcanvas-header border-bottom border-light">
              <h5 className="offcanvas-title text-white">Menu</h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink to="/talk" className="nav-link navbar-brand pe3">
                    Ask Alloy
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <Outlet />
    </main>
  );
};

export default MainLayout;
