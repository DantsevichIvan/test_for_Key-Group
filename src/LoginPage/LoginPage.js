import React from 'react'
import style from './Login.module.css'
import {Field, reduxForm} from "redux-form";
import {Input} from "../FormsControls/FormsControls";
import {required} from "../FormsControls/validators";
import {logIn} from "./auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={'Login'} validate={[required]} name={'username'} component={Input}/></div>
            <div><Field placeholder={'Password'} validate={[required]} name={'password'} type="password"
                        component={Input}/></div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        props.logIn(formData.username, formData.password)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h1>Login to ...</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
        { props.error ? <h2>{props.error}</h2>: null}
    </div>

}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    error: state.auth.error
})


export default connect(mapStateToProps, {logIn})(Login)


