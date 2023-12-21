import * as React from "react";
import { Navigate } from 'react-router-dom';
import { User, userSelector } from "../../redux/slice/userSlice";
import {  useAppSelector } from "../../hooks/redux";

const AboutPage:React.FC = ()=>{

    const user = useAppSelector(userSelector);

    if (!user?.token) {
        return <Navigate to={'/login'}/>
    }

    return (
        <h4>About Page</h4>
    )

}

export default AboutPage