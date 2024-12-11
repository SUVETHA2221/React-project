import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout(){
    return(
        <>
        <Header />
        <section>
            <Outlet />
        </section>
        <Footer />
        </>
    );
}

export default Layout;