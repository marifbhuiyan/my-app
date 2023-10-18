import classes from "./Layout.module.css";
import { Link } from "@reach/router";
const Layout = (props) => {
  const path = window.location.pathname;
  return (
    <div className={classes.app}>
      <nav className={classes.nav}>
        <div>
          <h3>Brand Name</h3>
        </div>
        <div className={classes.menu}>
          <ul>
            <li>
              <Link
                to="/"
                className={path === "/" ? classes.navActive : classes.navItem}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={
                  path === "/about" ? classes.navActive : classes.navItem
                }>
                About
              </Link>
            </li>
            <li>
              <Link
                to="/help"
                className={
                  path === "/help" ? classes.navActive : classes.navItem
                }>
                Help
              </Link>
            </li>
            <li>
              <Link
                to="/clock"
                className={
                  path === "/clock" ? classes.navActive : classes.navItem
                }>
                Clock
              </Link>
            </li>
            <li>
              <Link
                to="/task"
                className={
                  path === "/task" ? classes.navActive : classes.navItem
                }>
                Task
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <main className={classes.main}>{props.children}</main>
      <footer className={classes.footer}>
        <ul>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
          <li>Link 4</li>
        </ul>
      </footer>
    </div>
  );
};

export default Layout;
