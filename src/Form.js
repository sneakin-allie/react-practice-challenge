import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            name: {
                value: ''
            },
            role: {
                value: ''
            }
        };
    }

    updateName = (name) => {
        this.setState({
            name: {value: name}
        });
    }

    updateRole = (role) => {
        this.setState({
            role: {value: role}
        });
    }

    render() {
        return (
            <form onSubmit={e => this.props.handleSubmit(e, this.state.name, this.state.role)}>
                <label htmlFor='name'>
                    Name:
                </label>
                <input type='text' name='name' id='name' onChange={e => this.updateName(e.target.value)}/>
                <label htmlFor='role'>
                    Role:
                </label>
                <input type='text' name='role' id='role' onChange={e => this.updateRole(e.target.value)}/>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default Form;