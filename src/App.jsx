import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./assets/tailwind.css";
import React from "react";
import { Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import UserList from './pages/UserList';
import Notes from './pages/notes';

const GuestLayout = React.lazy(() => import("./layouts/GuestLayout"));
const GuestHome = React.lazy(() => import("./pages/Guest/GuestHome"));
const HeroSection = React.lazy(() => import("./pages/Guest/HeroSection"));
const About = React.lazy(() => import("./pages/Guest/About"));
const TopProduct = React.lazy(() => import("./pages/Guest/TopProduct"));
const Testimoni = React.lazy(() => import("./pages/Guest/Testimoni"));
const Footer = React.lazy(() => import("./components/Footer"));
const Ketersediaan = React.lazy(() => import("./pages/Guest/Ketersediaan"));

const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Error400 = React.lazy(() => import("./pages/Error400"));
const Error401 = React.lazy(() => import("./pages/Error401"));
const Error403 = React.lazy(() => import("./pages/Error403"));
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const Login = React.lazy(() => import("./pages/Auth/Login"));
const Register = React.lazy(() => import("./pages/Auth/Register"));
const Forgot = React.lazy(() => import("./pages/Auth/Forgot"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const Loading = React.lazy(() => import("./components/Loading"));


const Dashboard = React.lazy(() => import("./pages/Dashboard"))
function App() {

  return (
    <Suspense fallback={<Loading />}>
            <Routes>
                <Route element={<MainLayout/>}>
                <Route path='*' element={<NotFound/>}/>
                <Route path="/" element={<Dashboard />} />
                <Route path="/orders" element={<Orders />} />
                <Route path='/403' element={<Error403/>}/>
                <Route path='/401' element={<Error401/>}/>
                <Route path='/400' element={<Error400/>}/>
                <Route path="/customers" element={<Customers />} />
                <Route path="/UserList" element={<UserList />} />
                <Route path="/notes" element={<Notes />} />

                </Route>

                <Route element={<AuthLayout/>}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register/>} />
                <Route path="/forgot" element={<Forgot/>} />
                </Route> 
                
                <Route element={<GuestLayout/>}>
                <Route path="/guest" element={<GuestHome />} />
                <Route path="/About" element={<About />} />
                <Route path="/topproduct" element={<TopProduct />} />
                <Route path="/testimoni" element={<Testimoni />} />
                <Route path="/hero" element={<HeroSection />} />
                <Route path="/ketersediaan" element={<Ketersediaan />} />
                </Route>
                </Routes>
                </Suspense>
  )
}

export default App
