import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./Pages/Home/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import MyOrders from "./Pages/MyOrders/MyOrders";
import ManageOrders from "./Pages/ManageOrders/ManageOrders";
import AddService from "./Pages/AddService/AddService";
import ContactUs from "./Pages/ContactUs/ContactUs";
import ServiceDetail from "./Pages/ServiceDetail/ServiceDetail";
import LogIn from "./Pages/LogIn/LogIn";
import SignUp from "./Pages/SignUp/SignUp";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/myOrders" element={<MyOrders></MyOrders>}></Route>
        <Route path="/logIn" element={<LogIn></LogIn>}></Route>
        <Route path="/signUp" element={<SignUp></SignUp>}></Route>
        <Route
          path="/manageOrders"
          element={<ManageOrders></ManageOrders>}
        ></Route>
        <Route path="/addService" element={<AddService></AddService>}></Route>
        <Route
          path="/serviceDetail/:id"
          element={<ServiceDetail></ServiceDetail>}
        ></Route>
        <Route path="/contactUs" element={<ContactUs></ContactUs>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
