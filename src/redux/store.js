import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Define an initial state value for the app
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

// Reducer function that calculates a new state based on the old state and the action
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INITIAL_LOAD": {
      // Create a new state obj to preserve immutability
      const newState = { pages: action.payload.pages };
      return newState;
    }
    default:
      return state;
  }
};

// Thunk action creator function 
export const createInitialLoad = (pages) => ({
  type: "INITIAL_LOAD",
  payload: { pages },
});

// Thunk Function
// that activates upon store.dispatch(loadInitial) 
// takes dispatch method as an argument
// fetches pages data from the server 
// passes it further as an argument to action creator function 
// that will then be dispatched to reducer function 
export const loadInitial = (dispatch) => {
  fetch("http://localhost:5000/api/pages")
    .then((resp) => resp.json())
    .then((pages) => dispatch(createInitialLoad(pages)));
};

// Include Redux Thunk middleware
const composeEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

// Create and export a Redux store instance
// reducer will be used to generate the initial state and manage updates
export default createStore(reducer, composeEnhancer);
