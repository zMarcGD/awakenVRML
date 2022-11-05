import Navbar from './Navbar.js';
import PastMatches from './PastMatches.js';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import About from './About.js'
import Updatedb from './Updatedb.js'
import Stats from './Stats.js'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Routes>
            <Route path="/" element={<About/>}/>
            <Route path="/PastMatches" element={<PastMatches/>}/>
            <Route path="/update" element={<Updatedb/>}/>
            <Route path="/stats" element={<Stats/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
