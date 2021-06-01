import { ActionType } from "./../action-types";

interface SearchQuoteAction {
  type: ActionType.SEARCH_QUOTE;
}

interface SearchQuoteSuccessAction {
  type: ActionType.SEARCH_QUOTE_SUCCESS;
  payload: string[];
}

interface SearchQuoteErrorAction {
  type: ActionType.SEARCH_QUOTE_ERROR;
  payload: string;
}

export type Action =
  | SearchQuoteAction
  | SearchQuoteSuccessAction
  | SearchQuoteErrorAction;
