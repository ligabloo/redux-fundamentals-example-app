import { useDispatch, useSelector } from "react-redux";
import { visibilityChanged, VisibilityStatus } from "./filtersSlice";

const selectVisibility = (state) => state.filters.visibility;

const VisibilityFilters = () => {
  const dispatch = useDispatch();
  const activeStatus = useSelector(selectVisibility);

  return (
    <div className="visibility-filters">
      {Object.keys(VisibilityStatus).map((filterKey) => {
        const status = VisibilityStatus[filterKey];

        return (
          <span
            key={`visibility-filter-${status}`}
            className={`filter ${status === activeStatus && "filter--active"}`}
            onClick={() => {
              dispatch(visibilityChanged(status));
            }}
          >
            {status}
          </span>
        );
      })}
    </div>
  );
};

export default VisibilityFilters;
