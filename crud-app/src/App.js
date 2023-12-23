import logo from "./logo.svg";
import "./App.css";
import CrudMain from "./component/CrudMain";
import { Route, Routes } from "react-router-dom";
import ReadData from "./component/crudApp/ReadData/ReadData";
import CreateData from "./component/crudApp/createData/CreateData";
import NavbarMain from "./component/header/Navbar";
import EditData from "./component/crudApp/EditData/EditData";

function App() {
  return (
    <div>
      <NavbarMain />
      <Routes>
        <Route path="/" element={<ReadData />}></Route>
        <Route path="/create" element={<CreateData />}></Route>
        <Route path="/edit" element={<EditData />}></Route>
      </Routes>
    </div>
  );
}

export default App;
