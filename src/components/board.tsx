'use client'
import Msg from './message';

import React, { useState, useEffect } from 'react'
import { FaPlay, FaStop } from "react-icons/fa";

export default function Board() {
  // : Read arr from somewhere

  const [DBC, setDBC] = useState(0)

  useEffect(() => {
    fetch('/api/dbc').then(res => res.json()).then(data => {
      setDBC(data);
    });
  }, []); //END useEffect
  const dbc = JSON.parse(JSON.stringify(DBC))
  // console.log(dbc)
  const arr = []
  var it = 0
  for (const keys in dbc) {
    // console.log(`${JSON.stringify(dbc[keys])}`)
    arr.push(<Msg header={keys} dbc={dbc} key={keys} inactIcon={<FaPlay className="icon"/>} actIcon={<FaStop className='icon'/>}/>)
      // console.log(JSON.stringify(subKeys))
    
    
    it = it +1
  }

  

  return arr;
}