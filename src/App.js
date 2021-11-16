import { BrowserRouter as Router, Route , Switch , Redirect } from 'react-router-dom';
import { useState } from 'react'
import './components/component.css'
import ConnectPage from './components/ConnectPage';
import SignUp from './components/SignUp';
import Site from "./components/Site"

const Comp=()=>{
  const donne=localStorage.getItem("userId")
  if(donne===null && window.location.pathname==="/inscription_client"){
    return(<div>
      inscription
      <Redirect to="/inscription_client"/>
    </div>)
  }
  else if(donne===null && window.location.pathname==="/connection"){
    return(<div>
      connection
      <Redirect to="/connection"/>
    </div>)
  }
  return(<div></div>)
}

function App() {
  const [authorize, setAuthorize] = useState(false)
  const donne=localStorage.getItem("userId")
  return (
    <div className="App">
      
      <Router>
        <Comp/>
        <Switch>
          <Route path="/site">
            <Site/>

          </Route>
          <Route path="/connection">
            <ConnectPage/>
          </Route>
          <Route path="/inscription_client">
            <SignUp/>
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
