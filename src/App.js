import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import View from './components/View';
import Profile from './components/Profile';
import Edit from './components/Edit';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  return (
    <div>

      <Router>

      <Navbar/>

      <Switch>

            <Route exact path="/"> <Home></Home> </Route> 

            <Route exact path="/view"> <View></View> </Route> 
            <Route exact path="/profile/:id"> <Profile></Profile> </Route> 
            <Route exact path="/edit/:id"> <Edit></Edit> </Route> 

      </Switch>
      
      </Router>


    </div>
  );
}

export default App;
