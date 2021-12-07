import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
  pages: {
    home: {
      mainMenu: [],
      hero: {},
      spotList: [],
      popularProducts: [],
    },
    products: {},
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INITIAL_LOAD": {
      const newState = { pages: action.payload.pages };
      return newState;
    }
    default:
      return state;
  }
};

export const createInitialLoad = (pages) => ({
  type: "INITIAL_LOAD",
  payload: { pages },
});

export const loadInitial = (dispatch) => {
  fetch("http://localhost:5000/api/pages")
    .then((resp) => resp.json())
    .then((pages) => dispatch(createInitialLoad(pages)));
};

const composeEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

export default createStore(reducer, composeEnhancer);
