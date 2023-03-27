import React, { Fragment } from 'react'
const Welcome="Welcome to my world";
const title="Shariful Islam";
const desc="Here is my skills man:";

const Skills=()=>{
    return(
        <>
        <h3>Html</h3>
        <h3>CSS</h3>
        <h3>javascript</h3>
        <h3>React</h3>
        </>
    )
}

const Header=()=> {
  return (
    <Fragment>
        <h1>{Welcome}</h1>
        <h2>{title}</h2>
        <p>{desc}</p>
        <Skills />
      
    </Fragment>
  )
}

export default Header
