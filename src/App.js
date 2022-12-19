import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import MyOrders from "./Pages/MyOrders/MyOrders";
import ManageOrders from "./Pages/ManageOrders/ManageOrders";
import AddService from "./Pages/AddService/AddService";
import ContactUs from "./Pages/ContactUs/ContactUs";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/myOrders" element={<MyOrders></MyOrders>}></Route>
        <Route
          path="/manageOrders"
          element={<ManageOrders></ManageOrders>}
        ></Route>
        <Route path="/addService" element={<AddService></AddService>}></Route>
        <Route path="/contactUs" element={<ContactUs></ContactUs>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
