import {combineReducers } from 'redux'
import DeshboardReducer from '../dashbord/dashboardReducer'
import TabReducer  from '../common/tab/tabReducer'
import billingCycleReducer from '../billingCycle/billingCycleReducer'
const rootReducers  = combineReducers({
    dashboard: DeshboardReducer,
    tab:TabReducer,
    billingCycle: billingCycleReducer
})

export default rootReducers