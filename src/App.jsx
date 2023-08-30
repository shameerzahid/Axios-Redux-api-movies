import "./App.scss"
import React from "react"
import { Routes, Route } from 'react-router-dom'
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import MovieDetail from "./components/MovieDetail/MovieDetail"
import PageNotFound from "./components/PageNotFound/PageNotFound"
import Footer from "./components/Footer/Footer"
function App() {

  return (
    <div className="app">
         <Header />
         <div className="container">
     <Routes>
   
      <Route exact path="/" element={<Home />} />
      <Route exact path="/movie/:imdbID" element={<MovieDetail />} />
      <Route  exact path="*" element={<PageNotFound />} />
     </Routes>
     </div>
     <Footer/>
    </div>
  )
}

export default App
