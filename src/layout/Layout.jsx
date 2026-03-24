import Header from "../layout/Header.jsx";
import Footer from "../layout/Footer.jsx";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;