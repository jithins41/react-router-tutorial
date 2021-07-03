import Navbar from "./Components/Navbar";
import{BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Index from './Components/Index'
import About from './Components/about'

function App() {
  return (
    <div>
      <h1>Hi iam from App.js</h1>
      <Navbar></Navbar>

      <Router>
        <Link className='btn btn-primary mr-5' to='/about'> About </Link>
        <Link className='btn btn-primary mr-3' to='/index'>Index</Link>
        <Route component={About} path='/about'/>
        <Route component={Index} path='/index'/>
      </Router>

    </div>
  );
}

export default App;
