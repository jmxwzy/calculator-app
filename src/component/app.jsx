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
                        <Route path='/' element={<Home></Home>}></Route>
                        <Route path='/home' element={<Home></Home>}></Route>
                        <Route path='/calculator' element={<Calculator></Calculator>}></Route>
                        <Route path='/login' element={<Login></Login>}></Route>
                        <Route path='/register' element={<Register></Register>}></Route>
                        <Route path='/404' element={<NotFound></NotFound>}></Route>
                        <Route path='*' element={<Navigate replace to="/404"></Navigate>}></Route>
                    </Routes>
                </div>
            </React.Fragment>
        );
    }
}
 
export default App;