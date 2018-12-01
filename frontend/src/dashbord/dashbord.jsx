import React, {Component} from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

class Dashbord extends  Component {

    render() {
        return (
            <div>
                <ContentHeader title='Dashbord' small='Versão 1.0'></ContentHeader>
                <Content>
                    <Row>
                        <ValueBox cols='12 4'  color='green'  icon='bank' value='R$ 10,00' text='Total Créditos'/>
                        <ValueBox cols='12 4'  color='red' icon='bank' value='R$ 10,00' text='Total Debitos'/>
                        <ValueBox cols='12 4'  color='blue' icon='money' value='R$ 0,00' text='Valor consolidado'/>
                    </Row>
                </Content>
            </div>
        )
    }
}
export default Dashbord