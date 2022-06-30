import React from 'react'

import classes from'./Header.module.css'

const Header = () => {
  return (
    <header>
        <h1>Countries of the World</h1>
        <div className={classes["sub-title"]}>
          <p>Powered by: <a href="https://restcountries.com/" rel="noopener noreferrer" target="_blank">restcountries.com</a></p>
        </div>
    </header>
  )
}

export default Header
