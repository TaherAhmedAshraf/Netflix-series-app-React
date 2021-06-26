import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./card"
import Data from "./data"


function sCard(val) {
  return (
    <Card 
      key={val.id}
      img={val.sImg}
      title={val.sTitle}
      count={val.sCount}
      name={val.sName}
      link={val.sLink}
    />
  )
}

ReactDOM.render(
  <>
    <h1>Series I have Watched</h1>
    {Data.map(sCard)}
  </>,
  document.getElementById("root")
)
