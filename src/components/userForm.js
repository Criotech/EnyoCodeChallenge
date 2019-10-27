import React from 'react';
import UserList from './userList';
import { Modal, Button, Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { userInputForm, toggleModal, add_User, delete_User } from '../actions';

function UserForm() {
    const dispatch = useDispatch()
    const { firstName, lastName, age, birthday, hobby, id, userData, edit, visible } = useSelector(state => state.user)
    console.log(userData)
    
    const showModal = data => {
        dispatch(toggleModal() )       
    }

    const handleCancel = data => {
        dispatch(toggleModal() )       
    }

    const handleChange = event => {
        const { name, value } = event.target
        console.log(name, value)
        dispatch(userInputForm({ prop: name, value }))                
    }
    
    const DeleteUser = data => {
        dispatch(delete_User(data))       
    }


    const onSubmit = event => {
        event.preventDefault()
        
        dispatch(add_User({ id, firstName, lastName, age, birthday, hobby }))                
    }

        return (
            <div>
                 <UserList showModal={showModal} deleteUser={DeleteUser} entries={userData} />

                <div>
                    <Button className="toggleForm" onClick={showModal}>
                        <i className="fa fa-plus" aria-hidden="true"></i>
                    </Button>
                    <Modal
                        visible={visible}
                        title="User Data Form"
                        onCancel={handleCancel}
                        footer={[
                            <Button key="back" onClick={handleCancel}>
                                Return
                            </Button>
                        ]}
                    >
                        <form>
                            <Input type="text" name="firstName" value={firstName} onChange={handleChange} placeholder="first name" /> <br /> <br/>
                            <Input type="text" name="lastName" value={lastName} onChange={handleChange} placeholder="last name" /> <br /> <br/>
                            <Input type="number" name="age" value={age} onChange={handleChange} placeholder="age" /> <br /> <br/>
                            <Input type="date" name="birthday" value={birthday} onChange={handleChange} placeholder="birthday" /> <br /> <br/>
                            <Input name="hobby" value={hobby}  onChange={handleChange} type="text" placeholder="Hobby" /> <br /> <br/>
                            <Input type="submit" className="inputButton" onClick={onSubmit} value={(edit===false)? 'Add': 'Edit'} />

                        </form>
                    </Modal>
                </div> 

            </div>
        );
}

export default UserForm;


