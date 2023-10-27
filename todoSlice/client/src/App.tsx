import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import MainPage from './components/Pages/MainPage';
import RegPage from './components/Pages/RegPage';
import AuthPage from './components/Pages/AuthPage';
import NavBar from './components/UI/NavBar';
import { useAppDispatch, useAppSelector } from './hooks/reduxHook';
import { userCheckActionThunk } from './features/redux/actions/userAction';
import Layout from './components/Layout';
import PrivateRouter from './components/PrivateRouter';


function App(): JSX.Element {
const dispatch = useAppDispatch()
const user = useAppSelector((state) => state.user)

useEffect(() => {
  void dispatch(userCheckActionThunk())
},[])

  return (
    <Container>
    <Routes>
      <Route element={<Layout user={user}/>}>
        <Route path='/' element={<MainPage/>}/>
        <Route element={<PrivateRouter isAllowed={user.status !== 'success'}/>}>
          <Route path='/auth/signup' element={<RegPage/>}/>
          <Route path='/auth/signin' element={<AuthPage/>}/>
        </Route>
      </Route>
    </Routes>
    </Container>
  );
}

export default App;
