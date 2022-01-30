import Header from "./Header";
import Offcan from "./Offcan";
import NavbarLg from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Offcan />
      <NavbarLg />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
