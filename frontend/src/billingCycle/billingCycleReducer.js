const INITIAL_STATE  = { list :[] }

export  default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'BILLING_CYCLES_FECTED':
            return {...state, list: action.payload.data }
        default:
            return state
    }
}