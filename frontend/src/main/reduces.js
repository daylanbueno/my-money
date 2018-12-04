import {combineReducers } from 'redux'
import DeshboardReducer from '../dashbord/dashboardReducer'
import TabReducer  from '../common/tab/tabReducer'
import billingCycleReducer from '../billingCycle/billingCycleReducer'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

const rootReducers  = combineReducers({
    dashboard: DeshboardReducer,
    tab:TabReducer,
    billingCycle: billingCycleReducer,
    form: formReducer,
    toastr: toastrReducer
})

export default rootReducers