const FilterBar = ({
  categoryFilter,
  setCategoryFilter
}) => {

  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        marginTop: "20px"
      }}
    >
      <h3>Filters</h3>

      <select
        value={categoryFilter}
        onChange={(e) =>
          setCategoryFilter(
            e.target.value
          )
        }
      >
        <option value="All">
          All Categories
        </option>

        <option value="Food">
          Food
        </option>

        <option value="Transport">
          Transport
        </option>

        <option value="Bills">
          Bills
        </option>

        <option value="Entertainment">
          Entertainment
        </option>

        <option value="Other">
          Other
        </option>
      </select>
    </div>
  );
};

export default FilterBar;