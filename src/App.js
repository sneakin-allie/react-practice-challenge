import React from 'react';
import './App.css';
import Profile from './Profile';
import Form from './Form';

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      profiles : [
        {
          firstName : "Alfredo",
          lastName : "Salazar",
          role : "Mentor",
          id : 123
        },
        {
          firstName : "Daniel",
          lastName : "Di Venere",
          role : "Student",
          id : 456
        }
      ]
    }
  }

  handleSubmit = (event, firstName, lastName, role) => {
    event.preventDefault();
    this.setState({
      profiles: [
        ...this.state.profiles, {firstName: firstName.value, lastName: lastName.value, role: role.value}
      ]
    })
  }
  
  render(){
    return (
      <div>
          {/* Display the full list of Profiles using the Profile.js component*/}
          <Profile profiles={this.state.profiles} />
          {/* Extra credit (a little more challenging): Add a form to add a new profile to the list  */}
          <Form handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;
