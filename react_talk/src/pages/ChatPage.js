import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "../component/Header";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { actionCreators as chatActions } from "../redux/modules/chat";

function ChatPage(props) {
  console.log(props);
  const dispatch = useDispatch();
  const chat = useSelector(({ chat }) => chat);
  console.log(chat);
  const history = useHistory();

  useEffect(() => {
    dispatch(chatActions.loadChatFb());
  }, []);

  return (
    <MainScreen>
      {/* {chat.map((p, idx) => {
        return <div {...p} />;
      })} */}
    </MainScreen>
  );
}

const MainScreen = styled.div`
  display: flex;
  align-items: center;
  width: 100vh;
  height: 100vh;
`;

export default ChatPage;
