import React, { useEffect } from 'react'
import "./Cookies.style.css";

const Cookies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="cookiesContent">
    <h1 data-cy="title">Cookies</h1>
    <h3>Site currently under construction...</h3>
  </div>
  )
}

export default Cookies