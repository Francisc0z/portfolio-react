import './App.css';
import Header from './components/header';
import About from './components/About';
import Art from './components/art';
import Projects from './components/projects';
import Landing from './components/landing';

import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
function App() {
  return (
    <div className="App">
      
      <body>
        
        
        <Router>
        <Header />
          <div className="App">
        <Routes>
            <Route exact path="/" element={<Landing />}  />
            <Route exact path="/art" element={<Art />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/aboutMe" element={<About />} />
            <Route path="*" element={<Landing />} />
          </Routes>

          </div>
        </Router>
      </body>
    </div>
  );
}

export default App;
