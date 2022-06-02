import React from "react";
import styled from "styled-components";

function Header() {
  return <HeaderBox>Header</HeaderBox>;
}

const HeaderBox = styled.div`
  border: 1px solid black;
  width: 90vw;
  height: 10vh;
`;

export default Header;
