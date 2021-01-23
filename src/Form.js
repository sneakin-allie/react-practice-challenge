import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            firstName: {
                value: ""
            },
            lastName: {
                value: ""
            },
            role: {
                value: ""
            }
        };  
    }

    updateFirstName = (firstName) => {
        this.setState({
            firstName: {value: firstName}
        });
    }

    updateLastName = (lastName) => {
        this.setState({
            lastName: {value: lastName}
        });
    }

    updateRole = (role) => {
        this.setState({
            role: {value: role}
        });
    }

    render() {
        return (
            <div className="form">
                <form onSubmit={e => this.props.handleSubmit(e, this.state.firstName, this.state.lastName, this.state.role)}>
                    <label>First Name:</label>
                    <input type="text" onChange={e => this.updateFirstName(e.target.value)}></input>
                    <label>Last Name:</label>
                    <input type="text" onChange={e => this.updateLastName(e.target.value)}></input>
                    <label>Role:</label>
                    <input type="text" onChange={e => this.updateRole(e.target.value)}></input>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form;