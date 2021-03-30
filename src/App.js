import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutMe from './components/aboutme';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Navbar from './components/navbar';
import Footer from './components/footer'

function App() {

  return (
    <div className="App">
        <Router>
          <Navbar />
          <div className="container-lg">
            <Switch>
              <Route exact path="/react-portfolio"><AboutMe /></Route>
              {/* <Route exact path="/"><AboutMe /></Route> */}
              <Route path="/react-portfolio/portfolio"><Portfolio /></Route>
              <Route path="/react-portfolio/contact"><Contact /></Route>
            </Switch>
          </div>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
