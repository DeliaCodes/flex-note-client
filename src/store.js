import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import { crudReducer, navReducer } from "./reducer"

// form reducer is redux form

export default createStore(
    combineReducers({
        form: formReducer,
        crud: crudReducer,
        nav: navReducer
    })
);


