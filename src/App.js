import Home_page from './pages/Home_page'
import Sign_in_profile from './pages/Sign_in_profile'
import Sign_in_doctor from './pages/Sign_in_doctor'
import Sign_in_nurse from './pages/Sign_in_nurse'
import Sign_in_staff from './pages/Sign_in_staff'
import Sign_in_patient from './pages/Sign_in_patient'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Switch>

          <Route exact path="/">
            <Home_page/>
          </Route>
          
          <Route exact path="/Sign_in_profile">
          <Sign_in_profile/>
          </Route>

          <Route exact path="/Sign_in_doctor">
            <Sign_in_doctor/>
          </Route>

          <Route exact path="/Sign_in_staff">
            <Sign_in_staff/>
          </Route>

          <Route exact path="/Sign_in_nurse">
            <Sign_in_nurse/>
          </Route>

          <Route exact path="/Sign_in_patient">
            <Sign_in_patient/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}
 
export default App;
