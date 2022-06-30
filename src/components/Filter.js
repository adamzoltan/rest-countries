import React from 'react'

import classes from './Filter.module.css'

const Filter = (props) => {
  return (
    <div className={classes['filter-container']}>
        <form>
          <label htmlFor="search-form">
              <input
                  type="search"
                  name="search-form"
                  id="search-form"
                  className="search-input"
                  placeholder="Search for a country "
                  onChange={props.filterCountriesHandler}
              />
          </label>
        </form>
        <div className={classes['filter']}>
          <form onChange={props.filterContinentHandler}>
              <select>
                <option value="">All</option>
                <option>Africa</option>
                <option>Americas</option>
                <option>Asia</option>
                <option>Europe</option>
                <option>Oceania</option>
                <option>Polar</option>
              </select>
          </form>
          <form onChange={props.filterByOrderHandler}>
              <select>
                <option value="alphAsc">A - Z</option>
                <option value="alphDesc">Z - A</option>
                <option value="popAsc">Population: low to high</option>
                <option value="popDesc">Population: high to low</option>
                <option value="areaAsc">Area: small to big</option>
                <option value="areaDesc">Area: big to small</option>
              </select>
          </form>
        </div>
    </div>
  )
}

export default Filter
