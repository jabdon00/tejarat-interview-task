import React, {useState} from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { User, addUser, userSelector } from "../../redux/slice/userSlice";

type ValuesType = {
    username: string
    password: string
    authorized: boolean
}

type FieldType = {
    username?: string;
    password?: string;
    authorized?: boolean;
};



const LoginPage: React.FC = () => {

    const [loading,setLoading]=useState(false)

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const onFinish = (values: ValuesType) => {
        setLoading(true)
        axios.post('https://jsonplaceholder.typicode.com/users',values)
            .then(res=>{
                setLoading(false)
                const valueWithToken = {...values,token:'token.test'}
                dispatch(addUser(valueWithToken));
                navigate('/',{replace:true})
            })
    };

    return (
        <Form
            name="basic"
            wrapperCol={{ span: 16 }}
            style={{ width:'50%',
                margin:"auto",
                display:'flex',
                flexDirection:'column'
                ,alignItems:'center',
                justifyContent:'center',
            height:'100vh'}}
            initialValues={{ authorized: false }}
            onFinish={onFinish}
            autoComplete="off"
        >
            <Form.Item<FieldType>
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item<FieldType>
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item<FieldType>
                name="authorized"
                valuePropName="checked"
                wrapperCol={{ span: 16 }}
                style={{textAlign:'left'}}
            >
                <Checkbox>is authorized</Checkbox>
            </Form.Item>

            <Form.Item style={{textAlign:'left'}}>
                <Button type="primary" htmlType="submit" style={{width:'40%'}} loading={loading}>
                    Login
                </Button>
            </Form.Item>
        </Form>
    );
}

export default LoginPage;