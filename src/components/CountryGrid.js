import React from 'react'

import CountryCard from './CountryCard'
import classes from './CountryGrid.module.css'

const CountryGrid = ({countries, modalClickHandler}) => {
  return (
    <div className={classes['card-grid']}>
      {countries.map((country) => (
        <CountryCard key={country.alpha3Code} country={country} modalClickHandler={modalClickHandler}></CountryCard>
      ))}
    </div>
  )
}

export default CountryGrid
