import React from "react";
import Nav from "./Nav";

function Layout({ children }) {
  return (
    <div>
      <div className="content">
        <Nav />
        <div className="main_content">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
