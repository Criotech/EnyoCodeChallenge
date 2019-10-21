import React, { Component } from 'react'
import { Table, Divider } from 'antd';

const { Column, ColumnGroup } = Table;

class userList extends Component {

    EditUserData(data) {
        this.props.showModal();
        this.props.editUser(data)
    }

    deleteUser(data) {
        this.props.deleteUser(data)
    }

    render() {
        let data
        if (this.props.entries) {
            data= this.props.entries
        } else {
            console.log('no entries')
        }
        return (
            <div>
                    <Table dataSource={data}>
                        <ColumnGroup title="Name">
                            <Column title="First Name" dataIndex="firstName" key="firstName" />
                            <Column title="Last Name" dataIndex="lastName" key="lastName" />
                        </ColumnGroup>
                        <Column title="Age" dataIndex="age" key="age" />
                        <Column title="Birthday" dataIndex="birthday" key="birthday" />
                        <Column title="Hobby" dataIndex="hobby" key="hobby" />
                        
                        <Column
                            title="Action"
                            key="action"
                            render={(text, record) => (
                                <span>
                                    <span style={{color: "#3AA5FF", cursor: "pointer"}} onClick={this.EditUserData.bind(this, record)}>Edit </span>
                                    <Divider type="vertical" />
                                    <span onClick={this.deleteUser.bind(this, record.key)} style={{color: '#3AA5FF', cursor: "pointer"}}>Delete</span>
                                </span>
                            )}
                        />
                    </Table>
            </div>
        )
    }
}

export default userList
