import React from "react";
import { useSelector } from "react-redux";
const Header = () => {
  const result = useSelector((state) => state.Cart);

  console.log("result", result);

  return (
    <>
      <nav className="navbar mx-5 navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="">
          Navbar scroll
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav mr-3 my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Link
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Link</a>
            </li>
          </ul>
          <form className="d-flex mx-auto w-25">
            <input
              className="form-control mr-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          <div className="cart">
            <img
              src="https://i.pinimg.com/originals/bd/14/9c/bd149c5c05185de274f040d809f93354.png"
              alt=""
            />
            <div className="countWraper">
              <span>{result}</span>
            </div>
          </div>
        </div>
      </nav>
      <br />
    </>
  );
};

export default Header;
