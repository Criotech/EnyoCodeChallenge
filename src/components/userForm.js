import React, { Component } from 'react'
import UserList from './userList'
import { Modal, Button, Input } from 'antd';

class userForm extends Component {
    state = {
        loading: false,
        visible: false,
        firstName: '',
        lastName: '',
        age: '',
        birthday: '',
        hobby: '',
        key: 0,
        edit: false,
        userData: []
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 3000);
    };

    handleCancel = () => {
        this.setState({ visible: false });
    };


    handleChange(event) {
        const { name, value } = event.target

        this.setState({
            [name]: value
        })
    }

    
    deleteUser(data) {
        const { userData } = this.state;

        let deletedUser = userData.filter((user) => {
            return user.key !== data
        })

        this.setState({ userData: deletedUser })
    }


    onSubmit(event) {
        event.preventDefault()
        if (this.state.edit){
            this.deleteUser(this.state.key)
        }
        this.setState((prevState) => {
            return {
                key: prevState.key + 1
            }
        })
        const { key, firstName, lastName, age, birthday, hobby } = this.state;

        let data = { key, firstName, lastName, age, birthday, hobby }
        this.setState((prevState) => {
            return {
                userData: prevState.userData.concat(data),
                firstName: '',
                lastName: '',
                age: '',
                birthday: '',
                hobby: '',
                edit: false
            }
        })
        this.handleCancel()
    }

    editUser(data) {
        this.setState({
            key: data.key,
            firstName: data.firstName,
            lastName: data.lastName,
            age: data.age,
            birthday: data.birthday,
            hobby: data.hobby,
            edit: true
        })

    }

    render() {
        const { visible, firstName, lastName, age, birthday, hobby, edit } = this.state;
        return (
            <div>
                <UserList showModal={this.showModal.bind(this)} editUser={this.editUser.bind(this)} deleteUser={this.deleteUser.bind(this)} entries={this.state.userData} />

                <div>
                    <Button className="toggleForm" onClick={this.showModal}>
                        <i className="fa fa-plus" aria-hidden="true"></i>
                    </Button>
                    <Modal
                        visible={visible}
                        title="User Data Form"
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                        footer={[
                            <Button key="back" onClick={this.handleCancel}>
                                Return
                            </Button>
                        ]}
                    >
                        <form>
                            <Input type="text" name="firstName" value={firstName} onChange={this.handleChange.bind(this)} placeholder="firt name" /> <br /> <br/>
                            <Input type="text" name="lastName" value={lastName} onChange={this.handleChange.bind(this)} placeholder="last name" /> <br /> <br/>
                            <Input type="number" name="age" value={age} onChange={this.handleChange.bind(this)} placeholder="age" /> <br /> <br/>
                            <Input type="date" name="birthday" value={birthday} onChange={this.handleChange.bind(this)} placeholder="birthday" /> <br /> <br/>
                            <Input name="hobby" value={hobby} onChange={this.handleChange.bind(this)} type="text" placeholder="Hobby" /> <br /> <br/>
                            <Input type="submit" className="inputButton" onClick={this.onSubmit.bind(this)} value={(edit===false)? 'Add': 'Edit'} />

                        </form>
                    </Modal>
                </div>

            </div>
        );
    }
}

export default userForm