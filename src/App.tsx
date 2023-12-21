import * as React from 'react'
import {Routes, Route} from "react-router-dom";
import LoginPage from "./pages/login";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from "./components/Layout/index";
import ProtectedRoute from "./components/ProtectedRoute/index";
import { User, userSelector } from "./redux/slice/userSlice";
import {  useAppSelector } from "./hooks/redux";

function App() {

    const user = useAppSelector(userSelector);

    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route index element={<HomePage/>}/>
                <Route path="/about" element={<ProtectedRoute user={user}><AboutPage/></ProtectedRoute>}/>
                <Route path="/contact" element={<ProtectedRoute user={user} needAuthorized={true}><ContactPage/></ProtectedRoute>}/>
                {/*<Route path="*" element={<NoMatch />} />*/}
            </Route>
            <Route path={'/login'} element={<LoginPage/>}/>
        </Routes>
    )
}

export default App
