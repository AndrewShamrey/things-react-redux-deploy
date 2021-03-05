import { combineReducers } from 'redux';

import thingsReducer from './thingsReducer';
import modalReducer from './modalReducer';

const reducer = combineReducers({
    things: thingsReducer,
    modal: modalReducer,
});

export default reducer;
