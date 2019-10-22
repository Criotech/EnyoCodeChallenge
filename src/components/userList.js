import React from 'react';
import { Table, Divider } from 'antd';

const { Column, ColumnGroup } = Table;

function UserList(props) {
    let data
    if (props.entries) {
        data = props.entries
    } else {
        console.log('no entries')
    }

    const EditUserData = data => {
        props.showModal();
        props.editUser(data)
    }

    const deleteUser = data => {
        props.deleteUser(data)
    }

    return (
        <div>
             <Table rowKey={data => data.id} dataSource={data}>
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
                            <span style={{ color: "#3AA5FF", cursor: "pointer" }} onClick={()=>EditUserData(record)}>Edit </span>
                            <Divider type="vertical" />
                            <span onClick={()=>deleteUser(record.id)} style={{ color: '#3AA5FF', cursor: "pointer" }}>Delete</span>
                        </span>
                    )}
                />
            </Table> 
        </div>
    );
}

export default UserList;
