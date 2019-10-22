import React, { Component } from 'react'
import UserList from './userList'
import { Modal, Button, Input } from 'antd';
import { connect } from 'react-redux';
import { userInputForm, submitForm, deleteUser, editUser, toggleModal } from '../actions';

class userForm extends Component {

    showModal = () => {
        this.props.toggleModal()
    };

    handleCancel = () => {
        this.props.toggleModal()
    };


    handleChange(event) {
        const { name, value } = event.target

        this.props.userInputForm({ prop: name, value })
    }

    
    deleteUser(data) {
        this.props.deleteUser(data)
    }


    onSubmit(event) {
        event.preventDefault()
        
        if (this.props.edit===true){
            this.deleteUser(this.props.id)
        }
        const { id, firstName, lastName, age, birthday, hobby } = this.props;        
        this.props.submitForm({ id, firstName, lastName, age, birthday, hobby })

    }

    editUser(data) {
        this.props.editUser(data)
    }

    render() {
        const { firstName, lastName, age, birthday, hobby, userData, edit, visible } = this.props;        
        return (
            <div>
                <UserList showModal={this.showModal.bind(this)} editUser={this.editUser.bind(this)} deleteUser={this.deleteUser.bind(this)} entries={userData} />

                <div>
                    <Button className="toggleForm" onClick={this.showModal}>
                        <i className="fa fa-plus" aria-hidden="true"></i>
                    </Button>
                    <Modal
                        visible={visible}
                        title="User Data Form"
                        onCancel={this.handleCancel}
                        footer={[
                            <Button key="back" onClick={this.handleCancel}>
                                Return
                            </Button>
                        ]}
                    >
                        <form>
                            <Input type="text" name="firstName" value={firstName} onChange={this.handleChange.bind(this)} placeholder="first name" /> <br /> <br/>
                            <Input type="text" name="lastName" value={lastName} onChange={this.handleChange.bind(this)} placeholder="last name" /> <br /> <br/>
                            <Input type="number" name="age" value={age} onChange={this.handleChange.bind(this)} placeholder="age" /> <br /> <br/>
                            <Input type="date" name="birthday" value={birthday} onChange={this.handleChange.bind(this)} placeholder="birthday" /> <br /> <br/>
                            <Input name="hobby" value={hobby}  onChange={this.handleChange.bind(this)} type="text" placeholder="Hobby" /> <br /> <br/>
                            <Input type="submit" className="inputButton" onClick={this.onSubmit.bind(this)} value={(edit===false)? 'Add': 'Edit'} />

                        </form>
                    </Modal>
                </div>

            </div>
        );
    }
}


const mapStateToProps = (state) => {
    const { firstName, lastName, age, birthday, hobby, id, userData, edit, visible } = state.user;

    return { firstName, lastName, age, birthday, hobby, id, userData, edit, visible}
}

export default connect(mapStateToProps, { userInputForm, submitForm, deleteUser, editUser, toggleModal }) (userForm)

