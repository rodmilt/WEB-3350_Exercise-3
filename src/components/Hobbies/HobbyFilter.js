import "./HobbyFilter.css";

const HobbyFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="hobby-filter">
      <div className="hobby-filter__control">
        <label>Filter by hobby</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2024">2024</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default HobbyFilter;

// -----------Sports Filters----------------
//{
/* <option value="Baseball">Baseball</option>
          <option value="Basketball">Basketball</option>
          <option value="Football">Football</option>
          <option value="Soccer">Soccer</option>
          <option value="Track">Track</option>
          <option value="E-Sports">E-Sports</option> */
//}
