import { combineReducers } from "redux";

// reducers
import auth from "./auth";
import theme from "./theme";

const rootReducer = combineReducers({
    auth,
    theme,
});

export type RootReducer = ReturnType<typeof rootReducer>;

export default rootReducer;
