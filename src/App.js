import Header from "./components/Header";
import Profile from "./components/Profile";
import About from "./components/About";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Profile} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
