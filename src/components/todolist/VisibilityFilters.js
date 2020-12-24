import { VISIBILITY_FILTERS } from "../../constants/constants";
import { connect } from "react-redux";
import { setFilter } from "../../redux/actions/todoActions";
import { getVisibilityFilters } from "../../redux/selectors/selectors";
import cx from "classnames";
const VisibilityFilters = ({ activeFilter, setFilter }) => {
    return (
        <div className="visibility-filters">
            {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
                const currentFilter = VISIBILITY_FILTERS[filterKey];
                return (
                    <span key={`visibility-filter-${currentFilter}`}
                        className={cx(
                            "filter",
                            (currentFilter === activeFilter) && "filter-active"
                        )}
                        onClick={() => {
                            setFilter(currentFilter)
                        }}
                    >
                        {currentFilter}
                    </span>
                );
            })}
        </div>
    );
}


export default connect(state => ({ activeFilter: getVisibilityFilters(state) }), { setFilter })(VisibilityFilters);