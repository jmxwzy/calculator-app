import React, { Component } from 'react';
import Navbar from './navbar';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './content/home';
import Calculator from './content/calculator';
import Login from './content/login';
import Register from './content/register';
import NotFound from './content/notFound';

class App extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <Navbar></Navbar>
                <div className='container'>
                    <Routes>
                        <Route path='/calculator' element={<Home></Home>}></Route>
                        <Route path='/calculator/home' element={<Home></Home>}></Route>
                        <Route path='/calculator/calculator' element={<Calculator></Calculator>}></Route>
                        <Route path='/calculator/login' element={<Login></Login>}></Route>
                        <Route path='/calculator/register' element={<Register></Register>}></Route>
                        <Route path='/calculator/404' element={<NotFound></NotFound>}></Route>
                        <Route path='/calculator/*' element={<Navigate replace to="/404"></Navigate>}></Route>
                    </Routes>
                </div>
            </React.Fragment>
        );
    }
}
 
export default App;