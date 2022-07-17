import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import moment from "moment";

//actions
const LOAD_CHAT = "LOAD_CHAT";
const SET_CHAT = "SET_CHAT";
const ADD_CHAT = "ADD_CHAT";
//action_creators

const loadChat = createAction(LOAD_CHAT, (chatList) => ({ chatList }));
const addCHAT = createAction(ADD_CHAT, (chat) => ({ chat }));

// 기본값
const initialState = {
  chat: [],
  paging: { start: null, next: null, size: 3 },
  is_loading: false,
};
const loadChatFb = () => {
  return async function (dispatch, getState, { history }) {
    console.log(dispatch);
    await axios
      .get("http://localhost:3001/chat")
      .then((res) => {
        dispatch(loadChat(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export default handleActions(
  {
    [LOAD_CHAT]: (state, action) =>
      produce(state, (draft) => {
        draft.chat.push(...action.payload.chatList);
        console.log(draft);
      }),
  },
  initialState
);

const actionCreators = {
  loadChatFb,
};

export { actionCreators };
