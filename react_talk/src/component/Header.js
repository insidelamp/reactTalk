import React from "react";
import styled from "styled-components";
import { RiArrowDownSFill } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
import { BsChat } from "react-icons/bs";

function Header() {
  return (
    <HeaderBox>
      <LeftContents>
        <ShowChannel>채팅</ShowChannel>
        <RiArrowDownSFill />
      </LeftContents>
      <RightContents>
        <RightIcon1>
          <AiOutlineSearch />
        </RightIcon1>
        <RightIcon2>
          <BsChat />
        </RightIcon2>
      </RightContents>
    </HeaderBox>
  );
}

const HeaderBox = styled.div`
  border: 1px solid black;
  width: 90vw;
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const LeftContents = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  margin-left: 30px;
  font-size: 25px;
`;

const ShowChannel = styled.div`
  font-weight: bold;
  color: white;
`;

const RightContents = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: gray;
`;

const RightIcon1 = styled.div`
  margin-right: 20px;
  font-size: 32px;
  margin-top: 5px;
`;
const RightIcon2 = styled.div`
  margin-right: 20px;
  font-size: 25px;
`;

export default Header;
