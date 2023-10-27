import Fuse from "fuse.js";
import { useState, useEffect, useRef } from "preact/hooks";
const options = {
  keys: ["data.title", "data.designer", "data.tags", "data.colors.color.tag"],
  minMatchCharLength: 2,
  threshold: 0,
};

export default function Search({ searchList }) {
  const [isResultsOpen, setIsResultsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const fuse = new Fuse(searchList, options);

  const searchInputRef = useRef(null);
  const resultsContainerRef = useRef(null);
  const posts = fuse
    .search(query)
    .map((result) => result.item)
    .slice(0, 5);

  function handleSearch({ target = {} }) {
    const { value } = target;
    setQuery(value);
    setIsResultsOpen(true);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target) &&
        resultsContainerRef.current &&
        !resultsContainerRef.current.contains(event.target)
      ) {
        setIsResultsOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <svg
          height="20"
          width="20"
          clip-rule="evenodd"
          fill-rule="evenodd"
          stroke-linejoin="round"
          stroke-miterlimit="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m15.97 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007z"
            fill-rule="nonzero"
          />
        </svg>
        <input
          type="text"
          className="search-input text-sm"
          value={query}
          onInput={handleSearch}
          placeholder="Search..."
          ref={searchInputRef}
        />
      </div>
      {query.length > 1 && isResultsOpen && (
        <div className="search-results text-small" ref={resultsContainerRef}>
          <p className="search-result-string text-small">
            {" "}
            Found {posts.length} {posts.length === 1 ? "result" : "results"} for
            '{query}'{" "}
          </p>

          <ul className="search-result-list">
            {posts &&
              posts.map((post) => (
                <a className="search-result-link" href={`/keycap/${post.id}`}>
                  {post.data.title}
                  <li className="search-result-item">
                    <div className="search-keycap-color-container">
                      {post.data.colors.map((color, index) => {
                        if (index > 2) {
                          return;
                        }
                        return (
                          <div
                            className="mini-color-block"
                            style={`background-color:${color.color.hex}`}
                          />
                        );
                      })}
                    </div>
                  </li>
                </a>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}