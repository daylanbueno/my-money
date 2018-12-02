import {combineReducers } from 'redux'
import DeshboardReducer from '../dashbord/dashboardReducer'


const rootReducers  = combineReducers({
    dashboard: DeshboardReducer
})

export default rootReducers