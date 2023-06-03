import './App.css';
import React, { useState,useEffect } from 'react';
import Pokemonlist from './Pokemonlist';
import Pagination from './Pagination';
import axios from 'axios';
function App() {
  const [pokemon,setPokemon]=useState([])
  const [currentPageUrl,setCurrentPageUrl]=useState('https://pokeapi.co/api/v2/pokemon')
  const [nextPageUrl,setNextPageUrl]=useState()
  const [prevPageUrl,setPrevPageUrl]=useState()
  const [loading, setLoading]=useState(true)

  useEffect(()=>{
    setLoading(true)
    let cancel
    axios.get(currentPageUrl,{
      cancelToken: new axios.CancelToken(c=>cancel=c)
    }).then(res=>{
      // let resp=JSON.parse(res)
      setLoading(false)
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)
      console.log(res.data.next)
      
    setPokemon(res.data.results.map(p=>p.name))
  })
  return()=>console.log('its cancelled')

  
  },[currentPageUrl])
  function goToNextPage(){
    setCurrentPageUrl(nextPageUrl)
  }
  function goToPrevPage(){
    setCurrentPageUrl(prevPageUrl)
  }
  
  if(loading) return '...Loading...Please Wait'
  
  return (
    <div className='bg'>
    <h1 className='App-header'>Pokemon List App</h1>
    <Pokemonlist pokemon={pokemon}/>
    <Pagination
    goToNextPage={nextPageUrl? goToNextPage:null} 
    goToPrevPage={prevPageUrl? goToPrevPage:null}
    />
    </div>
  );
}

export default App;
