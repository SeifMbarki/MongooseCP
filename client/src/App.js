import { Switch, Route } from "react-router-dom";
import Navbr from "./Components/Navbr/Navbr";
import "./App.css";
import Home from "./Pages/Home/Home";
import Edit from "./Pages/Edit/Edit";
import Error from "./Pages/Error/Error";
import Add from "./Components/Add/Add";
function App() {
  return (
    <div className="App">
      <Navbr />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path={["/Edit/:id", "/Add"]} component={Add} />
        <Route path="/Profile/:id" component={Edit} />

        <Route path="/*" component={Error} />
      </Switch>
    </div>
  );
}

export default App;
