import {combineReducers } from 'redux'
import DeshboardReducer from '../dashbord/dashboardReducer'
import TabReducer  from '../common/tab/tabReducer'

const rootReducers  = combineReducers({
    dashboard: DeshboardReducer,
    tab:TabReducer
})

export default rootReducers