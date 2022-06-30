import React from 'react'

import classes from './CountryCard.module.css'

const CountryCard = ({country, modalClickHandler}) => {
  let population = country.population.toLocaleString();
//   let area = country.area.toLocaleString()
  return (
    <div className={classes['card']}>
        <div className={classes['card-image']}>
            <img src={country.flag} alt=""></img>
        </div>
        <div className={classes['country-details']}>
            <h1>{country.name}</h1>
            <h3>{country.region}</h3>
            <div>
                <p>Population: <span>{population}</span></p>
                <p>Area: <span>{country.area}</span></p>
                <p>Capital: <span>{country.capital}</span></p>
                <p>Language: <span>{country.languages[0].name}</span></p>
            </div>
            <div>
              <input id={country.alpha3Code} type="button" value="More detatils" onClick={modalClickHandler}/>
            </div>
        </div>
    </div>
  )
}

export default CountryCard
