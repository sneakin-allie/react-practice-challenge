import React from 'react';

class Profile extends React.Component {
    render() {
        const renderProfiles = this.props.profs.map((profile) => (
            <li key={profile.id}>{profile.firstName} {profile.lastName} - {profile.role}</li>
        ))
        return (
            <div>
                <h1>Profiles:</h1>
                    <ul>
                    {renderProfiles}
                    </ul>
            </div>
        );
    }
}

export default Profile;