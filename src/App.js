import { useEffect, useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { ContactPage} from './pages/ContactPage'
import { WorksPage} from './pages/WorksPage'
import { WorkPage } from './pages/WorkPage'
import { BlogPage } from './pages/BlogPage'
import './App.css'
import { NotFound } from './pages/NotFound'
import { PortfolioContext } from './context/portfolioContext'
import { Spinner } from './components/Spinner'

function App() {
  const [forcast, setForcast ] = useState([])
  const [visitors, setVisitors] = useState([])

  const getFakeVisitors = async () => {
    try{
      const res = await fetch('https://fakerapi.it/api/v1/persons?_quantity=10&_gender=male&_birthday_start=2005-01-01') 
      const visitorData = await res.json()
      
      setVisitors(visitorData)
    }catch(e) {
      console.log(e)
    }
  }
  const getWeather = async () => {
    try{
      const res = await fetch('https://api.weather.gov/alerts/active?area=NY') 
      const data = await res.json()
      setForcast(data)
    }catch(e) {
      console.log(e)
    }
  }
  useEffect(() => {
    getFakeVisitors()
  }, [])

  useEffect(() => {
    getWeather()
  }, [])
  //console.log(forcast)
  return (
    <PortfolioContext.Provider value = {{forcast, visitors}}>
      <div className="">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/works" element={<WorksPage/>}/>
          <Route path="/works/:id" element={<WorkPage/>}/>
          <Route path="/blog" element={<BlogPage/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    </PortfolioContext.Provider>
  );
}

export default App;