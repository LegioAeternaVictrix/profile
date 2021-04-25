import Header from "./components/Header";
import Profile from "./components/Profile";
import Me from "./components/Me";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Profile} />
        <Route path="/me" component={Me} />
        <Route path="/my-projects" component={Projects} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
