import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./searchBar.scss";

export default function SearchBar() {
  const [showSearchList, setShowSearchList] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  const { productList } = useSelector((store) => ({
    productList: store.productList.productList,
  }));

  const ref = useRef(null);
  const history = useHistory();

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setShowSearchList(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  useEffect(() => {
    let result = [];
    if (searchQuery) {
      result = productList.filter((item) => {
        return item.title.toLowerCase().includes(searchQuery.toLowerCase());
      });
      setShowSearchList(true);
      setFilteredList(result);

    } else {
      setShowSearchList(false);
      result = [];
      setFilteredList(result);
    }
  }, [searchQuery, productList]);

  return (
    <div className={"search-bar dropdown "} ref={ref}>
      <img className="search-icon" src="/search-icon.svg" alt="search-icon" />

      <input
        placeholder="Search...."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {showSearchList && (
        <div className={"dropdown-content " + (showSearchList ? "show" : "")}>
          {filteredList.length > 0 ? (
            filteredList.map((item) => (
              <span
                key={item.id}
                onClick={() => history.push("/product/" + item.id)}
              >
                {item.title}
              </span>
            ))
          ) : (
            <span>No Results found</span>
          )}
        </div>
      )}
    </div>
  );
}
