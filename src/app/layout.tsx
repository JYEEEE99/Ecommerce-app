import React from "react";
import "../style/reset.css";
import Header from "@/components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>My Next.js App</title>
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <footer>
          <p>© 2023 My Next.js App</p>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
