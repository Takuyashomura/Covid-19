import { combineReducers } from 'redux';
import dataReducer from './dataReducer';

const rootReducer = combineReducers({
    dataInfo: dataReducer
});

export default rootReducer;