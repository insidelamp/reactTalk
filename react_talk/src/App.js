import { BrowserRouter, Switch, Route } from "react-router-dom";
import FriendsPage from "./pages/FriendsPage";
import ChatPage from "./pages/ChatPage";
import ToolBar from "./pages/ToolBar";
import MenuBar from "./component/MenuBar";
import Header from "./component/Header";
import styled from "styled-components";
import Login from "./pages/Login";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./redux/configureStore";

function App() {
  return (
    <ConnectedRouter history={history}>
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
    </ConnectedRouter>
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
