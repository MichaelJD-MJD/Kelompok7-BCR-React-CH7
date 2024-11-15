import React, { useCallback, useEffect } from "react";
import "./Navbar.css";
import profilePicture from "../../assets/icon/profilePicture.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "@tanstack/react-router";
import { profile } from "../../service/auth/auth.service";
import { setToken, setUser } from "../../redux/slices/auth";
import { useQuery } from "@tanstack/react-query";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, token } = useSelector((state) => state.auth);

  const handleLogout = useCallback(() => {
    // delete the local storage here
    dispatch(setUser(null));
    dispatch(setToken(null));

    // redirect to login
    navigate({ to: "/login" });
  }, [dispatch, navigate]);

  // Use react query to fetch API
  const {data, isSuccess, isError} = useQuery({
    queryKey: ["profileAdmin"],
    queryFn: profile,
    enabled: token ? true : false,
  });

  useEffect(() => {
    if(isSuccess){
      dispatch(setUser(data));
    }else if (isError) {
      handleLogout()
    }
  }, [isSuccess, isError, data, dispatch, handleLogout]);

    const logout = (event) => {
      event.preventDefault();
      handleLogout();
    };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid navbar-container">
        <a className="navbar-brand">Navbar</a>
        <ul className="navbar-nav ms-auto align-items-center">
          <li className="nav-item mx-md-2">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>
          </li>
          <li className="nav-item mx-md-2">
            <div className="dropdown">
              <button
                className="btn profilePicture-btn dropdown-toggle d-flex align-items-center"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={user?.profile_picture}
                  alt=""
                  className="profilePicture-img"
                />
                <span className="ms-2">{user?.name}</span>
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#" onClick={logout}>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
