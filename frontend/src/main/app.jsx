import React from 'react'
import '../common/template/dependencias'
import Header from '../common/template/header'
import SideBar from '../common/template/sideBar'
import Footer from '../common/template/footer'
import Routes from './routes'

import Messages from '../common/msg/menssages'

export default props => (
    <div className='wrapper'>
        <Header />
        <SideBar />
        <div className='content-wrapper'>
            {props.children}
        </div>
        <Footer />
        <Messages />
    </div>
)