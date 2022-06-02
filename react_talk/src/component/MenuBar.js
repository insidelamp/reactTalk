import React from "react";
import styled from "styled-components";
import { BsFillBellSlashFill, BsXLg } from "react-icons/bs";
import { ImBubble } from "react-icons/im";
import { FiMoreHorizontal, FiSettings } from "react-icons/fi";
import { TbMinus, TbArrowsDiagonal2 } from "react-icons/tb";
import { IoMdPerson } from "react-icons/io";

function MenuBar() {
  return (
    <FixMenu>
      <ScreenBtn>
        <StateIcon1>
          <BsXLg />
        </StateIcon1>
        <StateIcon2>
          <TbMinus />
        </StateIcon2>
        <StateIcon3>
          <TbArrowsDiagonal2 />
        </StateIcon3>
      </ScreenBtn>
      <ClickMenu>
        <ClickUpMenu>
          <MenuIcon>
            <IoMdPerson />
          </MenuIcon>
          <MenuIcon>
            <ImBubble />
          </MenuIcon>
          <MenuIcon>
            <FiMoreHorizontal />
          </MenuIcon>
        </ClickUpMenu>
        <ClickDownMenu>
          <MenuIcon>
            <BsFillBellSlashFill />
          </MenuIcon>
          <MenuIcon>
            <FiSettings />
          </MenuIcon>
        </ClickDownMenu>
      </ClickMenu>
    </FixMenu>
  );
}

const FixMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 10vw;
  height: 100vh;
  border: 1px solid black;
  background-color: #403e3e;
`;

const ScreenBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 5vh;
`;

const ClickMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const ClickUpMenu = styled.div``;

const ClickDownMenu = styled.div``;

const StateIcon1 = styled.button`
  font-size: 15px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 15px;
  background-color: gray;
  :hover {
    background-color: red;
  }
  margin-left: 10px;
`;
const StateIcon2 = styled.button`
  font-size: 15px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 15px;
  background-color: gray;
  :hover {
    background-color: yellow;
  }
`;
const StateIcon3 = styled.button`
  font-size: 15px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 15px;
  background-color: gray;
  :hover {
    background-color: green;
  }
  margin-right: 10px;
`;

const MenuIcon = styled.div`
  font-size: 30px;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export default MenuBar;
