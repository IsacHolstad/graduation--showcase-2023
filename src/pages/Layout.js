import { Outlet } from "react-router-dom";
import HomeHeader from "../components/FormHeader"; 
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <HomeHeader />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;