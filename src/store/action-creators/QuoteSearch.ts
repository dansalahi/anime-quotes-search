import { QuoteService } from "./../../services/QuoteService";
import { Dispatch } from "redux";
import { Action } from "./../actions/index";
import { ActionType } from "./../action-types/index";

export const searchQuotes = (title: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_QUOTE,
    });
    try {
      const { data } = await new QuoteService().getQuotes(title);
      dispatch({
        type: ActionType.SEARCH_QUOTE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionType.SEARCH_QUOTE_ERROR,
        payload: error.message,
      });
    }
  };
};
