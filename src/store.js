import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import { crudReducer, navReducer, authReducer } from "./reducer"
import { composeWithDevTools } from "redux-devtools-extension";

// form reducer is redux form

const store = createStore(
    combineReducers({
        form: formReducer,
        crud: crudReducer,
        nav: navReducer,
        auth: authReducer,
    }), composeWithDevTools());

export default store;
/* export default createStore(
    combineReducers({
        form: formReducer,
        crud: crudReducer,
        nav: navReducer
    })
); */


