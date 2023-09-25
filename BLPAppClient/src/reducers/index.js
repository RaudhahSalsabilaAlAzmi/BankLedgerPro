import { combineReducers } from 'redux'
import transaksi from './transaksi'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    transaksi,
    form: formReducer
})