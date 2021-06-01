import { ActionType } from "./../action-types/index";
import { Action } from "./../actions";

interface QuotesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (
  state: QuotesState = initialState,
  action: Action
): QuotesState => {
  switch (action.type) {
    case ActionType.SEARCH_QUOTE:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_QUOTE_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_QUOTE_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
