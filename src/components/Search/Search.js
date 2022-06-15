import "./Search.scss";

const Search = () => {
  return (
    <form className="d-flex" role="search">
      <input
        className="form-control input-search"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="search-button" type="button">
        <span className="icon icon-search"></span>
      </button>
    </form>
  );
};

export default Search;
