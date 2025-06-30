import { PropsWithChildren } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      {/* <Header /> */}
      {children}
      <Footer />
    </>
  );
}

export default MainLayout;
