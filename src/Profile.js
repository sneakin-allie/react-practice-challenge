import React from 'react';

class Profile extends React.Component {
    render() {
        return (
            <div>
                <h2>Profiles:</h2>
                <ul className="list-of-profiles">
                    {this.props.profiles.map(profiles => 
                    <li key={profiles.id}>{profiles.firstName} {profiles.lastName} - {profiles.role}</li>)}
                </ul>
            </div>
        )
    }
}

export default Profile;