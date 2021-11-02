import React, { useState, useEffect } from "react";

//css
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";

//Notify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Component
import Navbar from "./component/layout/Navbar";

//Router
import { Switch, Route } from "react-router-dom";
import UserRoute from "./component/routes/UserRoute";
import AdminRoute from "./component/routes/AdminRoute";

//Pages
import Login from "./component/pages/auth/Login";
import Register from "./component/pages/auth/Register";
import Home from "./component/pages/Home";
import AdminDashboard from "./component/pages/admin/AdminDashboard";
import UserDashboard from "./component/pages/user/UserDashboard";

//Redux
import { useDispatch } from "react-redux";

//functions
import { currentUser } from "./component/functions/auth";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const idTokenResult = localStorage.getItem("token");
    //console.log("App", idTokenResult);
    if (idTokenResult) {
      currentUser(idTokenResult)
        .then((res) => {
          console.log("App", res);
          dispatch({
            type: "LOGGED_IN_USER",
            payload: {
              name: res.data.name,
              token: idTokenResult,
              role: res.data.role,
              id: res.data_id,
            },
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [dispatch]);
  return (
    <div className="App">
      <Navbar />
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Home} />{" "}
        <Route exact path="/login" component={Login} />{" "}
        <Route exact path="/register" component={Register} />{" "}
        <AdminRoute exact path="/admin/dashboard" component={AdminDashboard} />{" "}
        <UserRoute exact path="/user/dashboard" component={UserDashboard} />{" "}
      </Switch>{" "}
    </div>
  );
}

export default App;
