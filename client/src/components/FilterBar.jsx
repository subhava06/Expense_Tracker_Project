const FilterBar = ({
  categoryFilter,
  setCategoryFilter,
  dateFilter,
  setDateFilter
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

      <br /><br />

<select
  value={dateFilter}
  onChange={(e) =>
    setDateFilter(e.target.value)
  }
>
  <option value="all">
    All Time
  </option>

  <option value="thisMonth">
    This Month
  </option>

  <option value="lastMonth">
    Last Month
  </option>
</select>
    </div>
    
  );
};

export default FilterBar;