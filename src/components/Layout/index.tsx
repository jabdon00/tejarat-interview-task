import * as React from 'react';
import {Breadcrumb,Layout as AntLayout , Menu, theme} from 'antd';
import {Link, Outlet} from "react-router-dom";

const {Header, Content, Footer} = AntLayout;


const Layout: React.FC = () => {
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();

    return (
        <AntLayout>
            <Header
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Link to={'/'}>Home</Link>
                <Link to={'/about'} style={{margin:'0 2rem'}}>About</Link>
                <Link to={'/contact'}>Contact</Link>
            </Header>
            <Content style={{padding: '0 48px'}}>
                <div
                    style={{
                        padding: 24,
                        minHeight: 380,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Outlet />
                </div>
            </Content>
        </AntLayout>
    );
};

export default Layout;