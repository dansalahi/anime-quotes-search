import { combineReducers } from "redux";

import quotesReducer from "./QuotesReducer";

const reducers = combineReducers({
  quotes: quotesReducer,
});
export default reducers;

export type RootState = ReturnType<typeof reducers>;
