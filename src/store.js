import {createStore} from 'redux'
import reducer from './reduce/index'

const store = createStore(reducer)

export default store 