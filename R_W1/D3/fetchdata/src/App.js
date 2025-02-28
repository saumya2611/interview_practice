import logo from "./logo.svg";
import "./App.css";
import Data from "./Component/Data";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditData from "./Component/EditData";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Data />}></Route>
          <Route path="/edit/:id" element={<EditData />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Data /> */}
    </div>
  );
}

export default App;
