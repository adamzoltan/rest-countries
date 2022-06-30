import React from 'react'

import classes from './CountryModal.module.css'

const CountryModal = ({modalClickHandler, country}) => {
  let population = country[0].population.toLocaleString();
  return (
    <div>
        <div className={classes["backdrop"]} onClick={modalClickHandler}/>
        <div className={classes["modal"]}>
            <div className={classes["details"]}>
                <div>
                    <p><b>Name:</b> <span>{country[0].name}</span></p>
                    <p><b>Native name:</b> <span>{country[0].nativeName}</span></p>
                    <p><b>Region:</b> <span>{country[0].region}</span></p>
                    <p><b>Subregion:</b> <span>{country[0].subregion}</span></p>
                    <p><b>Population:</b> <span>{population}</span></p>
                </div>
                <div>
                    <p><b>Area:</b> <span>{country[0].area}</span></p>
                    <p><b>Capital:</b> <span>{country[0].capital}</span></p>
                    <p><b>Language:</b> <span>{country[0].languages[0].name}</span></p>
                    <p><b>Currency:</b> <span>{country[0].currencies[0].name}</span></p>
                    <p><b>Country code:</b> <span>{country[0].alpha3Code}</span></p>
                </div>
            </div>
            <button onClick={modalClickHandler}>Close</button>
        </div>
    </div>
  )
}

export default CountryModal
