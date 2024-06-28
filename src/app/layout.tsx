import React from "react";
import Header from "@/components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "@/components/Footer/Footer";

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>My Next.js App</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer iconName={""} />
      </body>
    </html>
  );
};

export default RootLayout;
