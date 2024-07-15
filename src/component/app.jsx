import React, { Component } from 'react';
import Navbar from './navbar';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './content/home';
import Calculator from './content/calculator';
import Login from './content/login';
import Register from './content/register';
import NotFound from './content/notFound';
import $ from 'jquery';

class App extends Component {
    state = {
        is_login: false,
        username: 'wzy',
    }; 

    componentDidMount() {
        // return ;
        $.ajax({
            url: "https://app165.acapp.acwing.com.cn/calculator/get_status/",
            type: 'get',
            success: resp => {
                if (resp.result === 'login') {
                    this.setState({
                        is_login: true,
                        username: resp.username,
                    });
                } else {
                    this.setState({
                        is_login: false,
                    });
                }
            }
        });
    }

    render() { 
        return (
            <React.Fragment>
                <Navbar is_login={this.state.is_login} username={this.state.username}></Navbar>
                <div className='container'>
                    <Routes>
                        <Route path='/calculator' element={<Home></Home>}></Route>
                        <Route path='/calculator/home' element={<Home></Home>}></Route>
                        <Route path='/calculator/calculator' element={this.state.is_login ? <Calculator /> : <Navigate replace to="/calculator/login" />}></Route>
                        <Route path='/calculator/login' element={this.state.is_login ? <Navigate replace to="/calculator" /> : <Login />}></Route>
                        <Route path='/calculator/register' element={this.state.is_login ? <Navigate replace to="/calculator" /> : <Register />}></Route>
                        <Route path='/calculator/404' element={<NotFound></NotFound>}></Route>
                        <Route path='/calculator/*' element={<Navigate replace to="/404"></Navigate>}></Route>
                    </Routes>
                </div>
            </React.Fragment>
        );
    }
}
 
export default App;