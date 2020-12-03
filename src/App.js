// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, {Component} from 'react'
import './App.css';
import Nav from './Components/Nav'
import BodyContent from './Components/BodyContent'
import Contact from './Components/Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
    <Router>
      <Switch>
      <div className="App">
        <Nav />
        {/* <BodyContent info={joseInfo} /> */}
        <Route path="/" exact component={BodyContent} />
        <Route path="/contact" exact component={Contact} />
      </div>
      </Switch>
    </Router>
    );
  }
}


export default App;
