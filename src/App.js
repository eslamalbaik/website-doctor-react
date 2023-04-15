import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Privacy from './components/Privacy.jsx'
import Terms from './components/Terms.jsx'
import './App.css';
import Main from './Main.jsx';
import Header from './components/header/Header.jsx'
import Footer from './components/Footer.jsx'
const App = () => {
  return (
    <>
      <Header />
      <Routes >
        <Route path='/' element={<Main />}> معلومات الدكتور</Route>
        <Route path='/privacy' element={<Privacy />}> سياسة الخصوصية</Route>
        <Route path='/terms' element={<Terms />}>  شروط الاستخدام</Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App