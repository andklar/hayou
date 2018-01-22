import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class InstructorList extends Component {

  constructor() {
    super();
    this.state = {
      instructors: [],
    };
  }

  componentDidMount(){
  	const URL = "http://api.hackeryou.com/v1/instructors?key=$2a$10$MIjjwDHKL38tNOFcVp.Fbea3H8T6uwx7Ov9bSkYme2CBVBu8AMewK";
    fetch(URL).then(res =>res.json()).then(json => {
      let instructors = json.res.map((pic) => {
        return(
          <div key={pic.results}>
            <img src={pic.instructor.medium} />
          </div>
        )
      })
      this.setState({instructors: instructors});
      console.log("state", this.state.instructors);
    })
  }

  render() {
    return(
      <div className="container2">
        <div className="container1">
          {this.state.instructors}
        </div>
      </div>
    )
  }

}