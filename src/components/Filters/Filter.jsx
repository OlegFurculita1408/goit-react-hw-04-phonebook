import PropTypes from "prop-types";
import css from './Filter.module.css';

const Filter = ({handleFilterChange, filterValue}) => {
        return (
            <div className={css.containerFilter}>
                <label htmlFor="fiind">Find contacts by name</label>
                    <input type="text"
                        onChange={handleFilterChange}
                        value={filterValue}
                />
            </div>
            )
}
Filter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired,
};
export default Filter