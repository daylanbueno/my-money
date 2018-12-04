import {combineReducers } from 'redux'
import DeshboardReducer from '../dashbord/dashboardReducer'
import TabReducer  from '../common/tab/tabReducer'
import billingCycleReducer from '../billingCycle/billingCycleReducer'
import { reducer as formReducer } from 'redux-form'

const rootReducers  = combineReducers({
    dashboard: DeshboardReducer,
    tab:TabReducer,
    billingCycle: billingCycleReducer,
    form: formReducer
})

export default rootReducers