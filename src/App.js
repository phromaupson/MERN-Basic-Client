//css
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";

//Component
import Navbar from "./component/layout/Navbar";

//Router
import { Switch, Route } from "react-router-dom";

//Pages
import Login from "./component/pages/auth/Login";
import Register from "./component/pages/auth/Register";
import Home from "./component/pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </div>
  );
}

export default App;
