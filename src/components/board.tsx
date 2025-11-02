'use client'
import Reader from './reader'
import React, { useState, useEffect } from 'react'

export default function getReaders() {
    // TODO: Read arr from somewhere

    const [DBC, setDBC] = useState(0)

    useEffect(() => {
    fetch('/api/dbc').then(res => res.json()).then(data => {
      setDBC(data);
    });
  }, []);
    const arr = []

    for (let i = 0; i < 5; ++i) {
      arr.push(<Reader head={i} value={i} key={i}/>)
    }



    return <p>{DBC}</p>;
  }