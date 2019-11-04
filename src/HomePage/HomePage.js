import React from 'react'
import {connect} from "react-redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

const Home = () =>{
    return(
        <div>
            THIS IS HOME PAGE
        </div>
    )

};




let mapStateToProps = (state) => {
    return {
    }
};


export default compose(
    connect(mapStateToProps),
    withAuthRedirect)(Home)

