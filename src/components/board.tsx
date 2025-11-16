'use client'
import Reader from './reader'
import React, { useState, useEffect } from 'react'

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
    arr.push(<h1 key={it}>{keys}</h1>)
    it = it +1
    for (const subKeys in dbc[keys]) {
      // console.log(JSON.stringify(subKeys))
      arr.push(<Reader head={subKeys} value={JSON.stringify(dbc[keys][subKeys])} key={it}/>)
      it = it + 1
    }
    arr.push(<br key={it}/>)
    it = it +1
  }

  

  return arr;
}