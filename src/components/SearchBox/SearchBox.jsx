import css from "./SearchBox.module.css";

const SearchBox = () => {
  return (
    <div className={css.searchBox}>
      <p className={css.searchText}>Find contacts by name</p>
      <label>
        <input className={css.searchData} type="text" name="searchBox" />
      </label>
    </div>
  );
};

export default SearchBox;
