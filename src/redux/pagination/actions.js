const ACTIONS = {
  CHANGE_PAGE: "CHANGE_PAGE",
  CHANGE_LIMIT: "CHANGE_LIMIT",
};

const changePage = (payload) => ({ type: ACTIONS.CHANGE_PAGE, payload });
const changeLimit = (payload) => ({ type: ACTIONS.CHANGE_LIMIT, payload });

export { ACTIONS, changeLimit, changePage };
