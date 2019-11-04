import React, {Component} from "react";
import {connect} from "react-redux";
import {logOut} from "./auth-reducer";
import {compose} from "redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";


class LogOut extends Component {
    logOut() {
        debugger
        this.props.logOut()
    }
    render() {

        return <div>
            <button onClick={this.logOut.bind(this)}>
                LogOut
            </button>
        </div>
    }
}


export default compose(
    connect(null, {logOut}),
    withAuthRedirect)(LogOut)

