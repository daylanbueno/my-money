import React, {Component} from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import labelAndInput from '..//common/form/LabelAndInput'
import { connect } from 'react-redux'
import { bindActionCreators} from  'redux'
import { init } from '../billingCycle/billingCycleActions'
import ItemList from '../billingCycle/itemList'
import Summary from '../billingCycle/summary'

class BillingCycleForm  extends Component {

    calculateSummary() {
        const sum = (t, v) => t + v
        return {
            sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum),
            sumOfDebts: this.props.debts.map(d => +d.value || 0).reduce(sum)
        }
    }
    
    render() {
        const { handleSubmit, readOnly , credits, debts } = this.props
        const { sumOfCredits, sumOfDebts } = this.calculateSummary()
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={labelAndInput}
                        label='Nome' cols='12 4' placeholder='Informe o nome' readOnly={readOnly}/>
                    <Field name='month' component={labelAndInput}
                        label='Mês' type='number' cols='12 4' placeholder='Informe o mês' readOnly={readOnly}/>
                    <Field name='year' component={labelAndInput}
                        label='Ano' type='number' cols='12 4' placeholder='Informe o ano' readOnly={readOnly}/>    
                    <Summary credit={sumOfCredits} debt={sumOfDebts}/>
                    <ItemList field='credits' legend='Créditos' readOnly={readOnly} cols='12 6' list={credits}/>
                    <ItemList field='debts' legend='Debitos' readOnly={readOnly} cols='12 6' list={debts} showStatus={true}/>
                </div>
                <div className='box-footer'>
                    <button type='submit'  className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
                    <button type='button'  className='btn btn-default'
                            onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({form: 'billingCycleForm',destroyOnUnmount:false})(BillingCycleForm) 
const seletor = formValueSelector('billingCycleForm')
const mapStateToProps = state => ({
    credits: seletor(state, 'credits'),
    debts: seletor(state, 'debts')
})
const mapDispatchToProps = dispatch =>   bindActionCreators({init},dispatch)
export default  connect(mapStateToProps,mapDispatchToProps)(BillingCycleForm)