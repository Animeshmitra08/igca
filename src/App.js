import * as React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Authentication/Login';
import Dashboard from './Pages/Dashboard';
import HomePage from './Pages/HomePage';
import Contacts from './singlepage/Contacts';
import About from './singlepage/About';
import AdminLogin from './Authentication/AdminLogin';
import SignUp from './Authentication/SignUp';
import { Certificate } from './Pages/Certificate';
import { UserAuthContextProvider } from './Authentication/UseAuthContext';
import ProtectedRoute from './Authentication/ProtectedRoute';
import Profile from './Pages/Profile';
import Exam from './Pages/Exam';
import ExamPage from './Pages/ExamPage';

  




function App() {
  return (
    <>
      <UserAuthContextProvider>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/register' element={<SignUp/>}/>
          <Route exact path='/adminlogin' element={<AdminLogin/>}/>

          <Route exact path='/dashboard' element={
            <ProtectedRoute>
              <Dashboard/>
            </ProtectedRoute>
          }>
            <Route index element={<Navigate to="profile" replace/>}/>
            <Route path='profile' element={<Profile/>}/>
            <Route path='exam' element={<Exam/>}/>
          </Route>
          <Route exact path='/examportal' element={
            <ProtectedRoute>
              <ExamPage/>
            </ProtectedRoute>
          }/>
          <Route exact path='/contact' element={<Contacts/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/certificate' element={<Certificate/>}/>
          <Route path='*' element={<h1>Page not found</h1>}/>
        </Routes>
      </UserAuthContextProvider>
    </>
  );
}

export default App;
