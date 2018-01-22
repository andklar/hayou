import React, { Component } from "react";
import "./App.css";

class InstructorDisplay extends Component {
  constructor() {
    super();
    this.state = {
      instructorData: []
    };
  }
  componentDidMount() {
    const URL = "http://api.hackeryou.com/v1/instructors?key=$2a$10$MIjjwDHKL38tNOFcVp.Fbea3H8T6uwx7Ov9bSkYme2CBVBu8AMewK";
    fetch(URL).then(res => res.json()).then(json => {
      this.setState({ instructorData: json });
    });
  }
  render() {
    const instructorData = this.state.instructorData;
    if (!instructorData) return <div>Loading</div>;
    const instructorList = JSON.stringify(instructorData.instructors, ['name', 'role'])
    return <div>{instructorList}</div>;
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      instructors: null,
    };
  }
  render() {
    return (
      <div className="App">
        <InstructorDisplay
        />
      </div>
    );
  }
}

export default App;