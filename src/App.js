import {BrowserRouter as Router, Route,  Routes } from "react-router-dom";
import CreateData from "./components/CreateData/CreateData";
import EditPage from "./components/EditPage/EditPage";
import Home from "./components/Home/Home";
import NavbarRoute from "./components/NavbarRoute/NavbarRoute";
import TableListRow from "./components/TableList/TableList";

function App() {
  return (
    <>
    <Router>
    <NavbarRoute/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/create" element={<CreateData/>}/>
        <Route path="/table" element={<TableListRow/>}/>
        <Route path="/table/edit/:id" element={<EditPage/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
