import { BrowserRouter, Switch, Route } from "react-router-dom";
import FriendsPage from "./pages/FriendsPage";
import ChatPage from "./pages/ChatPage";
import ToolBar from "./pages/ToolBar";
import MenuBar from "./component/MenuBar";
import Header from "./component/Header";
import styled from "styled-components";

function App() {
  return (
    <BrowserRouter>
      <MainScreen>
        <MenuBar></MenuBar>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact>
              <FriendsPage />
            </Route>
            <Route path="/chat" exact>
              <ChatPage />
            </Route>
            <Route path="/tool" exact>
              <ToolBar />
            </Route>
          </Switch>
        </div>
      </MainScreen>
    </BrowserRouter>
  );
}

const MainScreen = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  background-color: #212020;
`;
export default App;
