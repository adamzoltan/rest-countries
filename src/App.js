import React, { useState, useEffect } from 'react'

import CountryGrid from './components/CountryGrid'
import Header from './components/Header'
import Filter from './components/Filter'
import CountryModal from './components/CountryModal'

import classes from './App.module.css';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [countries, setCountries] = useState([]);
  const [pagination, setPagination] = useState(10);
  const [query, setQuery] = useState("")
  const [continentFilter, setContinentFilter] = useState("")
  const [orderByProperty, setOrderByProperty] = useState("")
  const [showCountryModal, setShowCountryModal] = useState(false)
  const [selectedCountryCode, setSelectedCountryCode] = useState("")

  const fetchCountries = async () =>  {
    try{
      const response = await fetch(`https://restcountries.com/v2/all`)
    if (!response.ok) {
      throw new Error('Something went wrong')
    }
    const data = await response.json();
    setCountries(data)
    setIsLoaded(true)
    console.log(data);
    
    } catch(error) {
      setError(error.message)
    }
  }

  useEffect(()=> {
    fetchCountries()
  }, [])

  const loadMoreCountriesHandler = () => {
    setPagination((prev) => prev + 10)
  }

  const loadAllCountriesHandler = () => {
    setPagination(countries.length)
  }

  const filterCountriesHandler = (event) => {
    setQuery(event.target.value.trim().toLowerCase());
  }

  const filterContinentHandler = (event) => {
    setContinentFilter(event.target.value);
    
  }

  const filterByOrderHandler = (event) => {
    setOrderByProperty(event.target.value)
  }
  
  const search = (data) => {
    let filtered = data
      .slice(0, pagination)
      .filter(country => country.name.toLowerCase().startsWith(query))
      .filter(country => country.region.startsWith(continentFilter))
    if (orderByProperty) {
      switch(orderByProperty) {
        case "alphAsc":
          filtered = [...filtered].sort((a, b) => (a.name > b.name) ? 1 : -1)
          break;
        case "alphDesc":
            filtered = [...filtered].sort((a, b) => (a.name < b.name) ? 1 : -1)
            break;
        case "popAsc":
          filtered = [...filtered].sort((a, b) => (a.population - b.population))
          break;
        case "popDesc":
          filtered = [...filtered].sort((a, b) => (b.population - a.population))
          break;
        case "areaAsc":
          filtered = [...filtered].sort((a, b) => (a.area - b.area))
          break;
        case "areaDesc":
          filtered = [...filtered].sort((a, b) => (b.area - a.area))
          break;
      }
    }
    return filtered 
  }

  const modalClickHandler = (event) => {
    setSelectedCountryCode(event.target.id);
    setShowCountryModal(!showCountryModal)
  }

  const getSelectedCountry = (data) => {
    return data.filter((country)=>country.alpha3Code.startsWith(selectedCountryCode))
  }

  let content = <></>

  if (countries.length > 0) {
    content = 
    <>
      <div className={classes['filter']}>
        <Filter 
          filterCountriesHandler={filterCountriesHandler} 
          filterContinentHandler={filterContinentHandler}
          filterByOrderHandler={filterByOrderHandler}>
        </Filter>
      </div>
      <CountryGrid 
        countries={search(countries)}
        modalClickHandler={modalClickHandler}>
      </CountryGrid>
      <div className={classes['btn-footer']}>
        <button onClick={loadMoreCountriesHandler}>Show More Countries</button>
        <button onClick={loadAllCountriesHandler}>Show All Countries</button>
      </div>
    </>
  }

  if (error) {
    content = <>{error}</>;
  }

  if (!isLoaded) {
    content = <p>Loading, please wait.</p>;
  }

  return(
    <React.Fragment>
      <Header></Header>
      {showCountryModal && <CountryModal modalClickHandler={modalClickHandler} country={getSelectedCountry(countries)}></CountryModal>}
      <div className={classes['wrapper']}>
        {content}
      </div>
    </React.Fragment>
  )
}

export default App;
