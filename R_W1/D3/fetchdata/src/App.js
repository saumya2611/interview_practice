import logo from "./logo.svg";
import "./App.css";
import Data from "./Component/Data";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditData from "./Component/EditData";
import { store } from "./Redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Data />}></Route>
            <Route path="/edit/:id" element={<EditData />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>

      {/* <Data /> */}
    </div>
  );
}

export default App;
