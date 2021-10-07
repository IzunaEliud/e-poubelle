import { BrowserRouter as Router, Route , Switch , Redirect } from 'react-router-dom';
import { useState } from 'react'
import './components/component.css'
import ConnectPage from './components/ConnectPage';
import SignUp from './components/SignUp';

function App() {
  const [authorize, setAuthorize] = useState(false)
  console.log(authorize)
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/connection">
            <ConnectPage/>
          </Route>
          <Route path="/inscription_client">
            <SignUp/>
          </Route>
          <Route path="/home">
            Home Page
          </Route>
        </Switch>
        {/* <Route>
          {authorize ? <Redirect to="/home"/>:<Redirect to="/inscription_client"/>}
        </Route> */}
      </Router>
    </div>
  );
}

export default App;
