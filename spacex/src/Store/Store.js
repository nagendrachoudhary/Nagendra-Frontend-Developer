import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from 'redux-thunk'
import { SpaceXData } from "./Reduser";
const store = createStore(SpaceXData,applyMiddleware(thunk))
export default store ;