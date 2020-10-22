import React from 'react';
import './App.css';

import AddMeetingFlow from './components/AddMeetingFlow/AddMeetingFlow';
import { fetchBuildingsData, 
  fetchMeetingRooms, 
  fetchMeetingsData
} from './helper/utils';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
        meetings : [],
        buildings: [],
        rooms : []
    }
}

  componentDidMount() {
      this.fetchData();
  }

  fetchData = () => {
      const buildings = fetchBuildingsData();
      const meetings = fetchMeetingsData();
      const rooms = fetchMeetingRooms();

      this.setState({
          buildings,
          meetings,
          rooms
      });
  }
  render() {
    const { buildings, meetings, rooms } = this.state;

    return (<Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home buildings={ buildings } meetings={ meetings } rooms={ rooms }/>
          </Route>
          <Route path="/addMeetings">
            <AddMeetingFlow buildings={ buildings } rooms={ rooms } meetings={ meetings } />
          </Route>
        </Switch>
      </div>
    </Router>)
  }
}

export default App;
