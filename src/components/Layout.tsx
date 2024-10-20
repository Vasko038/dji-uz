import { Fragment } from "react/jsx-runtime";
import Banner from "../pages/landing/Banner";
import Footer from "../pages/landing/Footer";
import Header from "../pages/landing/Header";
import Main from "../pages/landing/Main";
// import Navbar from "../pages/landing/Navbar";

function Layout() {
  return (
    <Fragment>
      <Header position="sticky" />
      <Banner />
      {/* <Navbar /> */}
      <Main />
      <Footer />
    </Fragment>
  );
}

export default Layout;
