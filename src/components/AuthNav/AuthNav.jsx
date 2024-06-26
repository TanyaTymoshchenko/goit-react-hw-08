import CustomNavLink from "../NavLink/NavLink";
import css from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div className={css["auth-bar"]}>
      <CustomNavLink to="/register">Register</CustomNavLink>
      <CustomNavLink to="/login">Log In</CustomNavLink>
    </div>
  );
};

export default AuthNav;