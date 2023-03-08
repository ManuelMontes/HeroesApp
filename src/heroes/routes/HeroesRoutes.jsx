import { Navigate, Route, Routes } from 'react-router-dom'
import {MarvelPage, DcPage, SearchPage, Heroe } from '../pages';
import { Navbar } from '../../ui'

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar />
        <div className='container'>
            <Routes>
                <Route path="marvel" element={<MarvelPage/>} />
                <Route path="dc" element={<DcPage/>} />
                <Route path="search" element={<SearchPage />} />
                <Route path="hero/:heroId" element={<Heroe/>} />
                <Route path="/" element={<Navigate to="/marvel"/>} />
            </Routes>
        </div>
    </>
  )
}
