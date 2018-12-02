import React, {Component} from 'react'
import { connect } from 'react-redux'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'


class Dashboard extends  Component {

    render() {
        const { credit, debt } = this.props.summary
        return (
            <div>
                <ContentHeader title='Dashbord' small='Versão 1.0'></ContentHeader>
                <Content>
                    <Row>
                        <ValueBox cols='12 4'  color='green'  icon='bank' value={`R$ ${credit}`} text='Total Créditos'/>
                        <ValueBox cols='12 4'  color='red' icon='bank' value={`R$ ${debt}`} text='Total Debitos'/>
                        <ValueBox cols='12 4'  color='blue' icon='money' value={`R$ ${credit - debt}`} text='Valor consolidado'/>
                    </Row>
                </Content>
            </div>
        )
    }
}
const mapStateToProps = state => ({summary: state.dashboard.summary})
export default connect(mapStateToProps)(Dashboard)
