import React, {Component} from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Header from "./Header/Header";
import Home from "./HomePage/HomePage";
import Login from "./LoginPage/LoginPage";
import ProfileContainer from "./ProfilePage/ProfileContainerPage";
import NewsContainer from "./NewsPage/NewsContainerPage";
import {connect} from "react-redux";
import {SuccessLogin} from "./LoginPage/auth-reducer";
import LogOut from "./LoginPage/LogOut";


class App extends Component {
    componentDidMount() {
        if(localStorage.getItem('name')){
            debugger
            let login=  JSON.parse(localStorage.getItem('name'))
            this.props.SuccessLogin(login.isAuth)
        }
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <div>
                    <Route path="/ /" component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/posts" component={NewsContainer}/>
                    <Route path="/profile" component={ProfileContainer}/>
                    <Route path="/logout" component={LogOut}/>
                </div>
            </div>
        );
    }
}

export default connect(null, {SuccessLogin,})(App) ;
