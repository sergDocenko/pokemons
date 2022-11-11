import { ACTIONS } from "./actions";

const initialState = { page: 0, limit: 10, offset: 0 };

function paginationReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.CHANGE_PAGE:
      return {
        ...state,
        page: action.payload,
        offset: action.payload * state.limit,
      };
    case ACTIONS.CHANGE_LIMIT:
      return {
        ...state,
        limit: action.payload,
        offset: action.payload * state.page,
      };
    default:
      return state;
  }
}
export default paginationReducer;
