import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store, { loadInitial } from "./redux/store";

// Dispatch initial load action to the store
store.dispatch(loadInitial);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
); 
