import { combineReducers} from "redux";

import mainReducer from './main.reducer';

const rootReducer = combineReducers({
    count: mainReducer
});

export default rootReducer;