import React from 'react'
import {connect} from "react-redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component{
    componentDidMount() {

    }
    render() {
        return(
            <div>

            </div>
        )
    }
}


let mapStateToProps = (state) => {
    return {

    }
}


export default compose(
    connect(mapStateToProps),
    withAuthRedirect)(ProfileContainer)
