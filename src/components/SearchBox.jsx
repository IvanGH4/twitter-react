import "./SearchBox.css";

function SearchBox() {
  return (
    <form className="rounded-pill trending py-2">
      <div className="py-2 px-3 d-flex justify-content-between align-items-center">
        <div>
          <i className="fas fa-search"></i>
        </div>
        <input
          type="text"
          placeholder="Buscar en Twitter"
          className="border-0 search-input text-light"
          // ponerle width 90%
        />
      </div>
    </form>
  );
}

export default SearchBox;
