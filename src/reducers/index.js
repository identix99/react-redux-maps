import { combineReducers } from "redux";
import { contactReducer} from "./reducer1";

const  rootRedusers = combineReducers({
   layer1 : contactReducer ,
})

export default rootRedusers;