import { useDispatch, useSelector } from "react-redux";
import { changeLimit, changePage } from "../redux/pagination/actions";

function usePagination() {
  const dispatch = useDispatch();
  const { limit, offset, page } = useSelector((state) => state.pagination);

  function nextPage() {
    dispatch(changePage(page + 1));
  }

  function previousPage() {
    if (page > 0) dispatch(changePage(page - 1));
  }
  function changeLimitPage(newLimit = 20) {
    dispatch(changeLimit(newLimit));
  }

  return {
    nextPage,
    previousPage,
    changeLimitPage,
    limit,
    offset,
  };
}
export default usePagination;
