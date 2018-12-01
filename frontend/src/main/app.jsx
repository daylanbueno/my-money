import React from 'react'
import '../common/template/dependencias'
import Header from '../common/template/header'
import SideBar from '../common/template/sideBar'
import Footer from '../common/template/footer'

export default props => (
    <div className='wrapper'>
        <Header/>
        <SideBar/>
        <div className='content-wrapper'>
            <h3>Conteúdo</h3>    
         </div>
        <Footer/>
    </div>
)