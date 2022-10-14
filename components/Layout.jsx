import React from "react";
import { Footer, Header, Sidebar } from "./";

const Layout = ({ children }) => {
  return (
    <div className="w-full h-screen max-h-screen flex flex-col  bg-black ">
      <Header />
      <main className="flex h-full items-center space-x-2 px-4 overflow-hidden">
        <Sidebar />
        <div className="h-full flex-grow bg-gray-500/10 backdrop-blur-lg rounded-lg overflow-scroll noscrollbar">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
