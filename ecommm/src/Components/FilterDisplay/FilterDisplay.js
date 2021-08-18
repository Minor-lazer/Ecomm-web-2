import React from "react";
import "./FilterDisplay.css";
import { useFilter } from "../../Context/FilterContext.js";

export default function FilterDisplay() {
  const { dispatch, filteredData } = useFilter();
  return (
    <div className="filter__card">
      <div>
        <div className="filter__options">
          <legend>SortBy</legend>
          <label>
            <input
              type="radio"
              onClick={() => dispatch({ type: "SORT", payload: "HIGH-TO-LOW" })}
            />
            High to low
          </label>
          <label>
            <input
              type="radio"
              onClick={() => dispatch({ type: "SORT", payload: "LOW-TO-HIGH" })}
            ></input>
            Price low to high
          </label>
        </div>
      </div>
      <div className="filter__options">
        <legend>Filters</legend>
        <label>
          <input
            type="checkbox"
            onClick={() => dispatch({ type: "FAST-DELIVERY" })}
          />
          Fast Delivery
        </label>
        <label>
          <input
            type="checkbox"
            onClick={() => dispatch({ type: "SHOW-IN-STOCK-ONLY" })}
          />
          Show InStock
        </label>
      </div>
    </div>
  );
}
