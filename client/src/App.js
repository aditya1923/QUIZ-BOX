import { Switch, Route } from "react-router-dom";
import Signup from "./Pages/SignUP/Signup";
import Login from "./Pages/LoginPage/login";
import Home from "./Pages/homepage/homepage";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/Login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
