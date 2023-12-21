import * as React from "react";
import {Navigate} from 'react-router-dom';
import {message} from 'antd';
import {User, userSelector} from "../../redux/slice/userSlice";
import {useAppSelector} from "../../hooks/redux";
import {Alert, Space} from 'antd';

const ProtectedRoute = ({user, needAuthorized, children}) => {

    const [messageApi, contextHolder] = message.useMessage();

    if (!user?.token) {
        return <Navigate to="/login" replace/>;
    }


    return (
        <>
            {needAuthorized && !user.authorized ?
                <Space direction="vertical" style={{width: '100%'}}>
                    <Alert message="شما احراز هویت نشدید" type="warning"/>
                    {children}
                </Space>
                : children}
        </>
    )
};

export default ProtectedRoute