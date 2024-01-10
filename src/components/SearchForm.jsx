const SearchForm = ({ keyword, setKeyword }) => {
  return (
    <form className="search-form">
      <input
        type="search"
        placeholder="Enter keyword..."
        value={keyword}
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
      />
    </form>
  );
};

export default SearchForm;
