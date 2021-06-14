import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <SLayout>
      <Header />
      <div className="children">{children}</div>
      <Footer />
    </SLayout>
  );
}

const SLayout = styled.div`
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box; 
  .children{
    min-height: calc(100vh - 100px);
  }
`