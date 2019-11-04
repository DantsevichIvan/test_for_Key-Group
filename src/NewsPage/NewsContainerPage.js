import React from 'react'
import {connect} from "react-redux";
import {getPosts} from "./NewsReducer";
import Post from "./Post";
import style from './News.module.css'
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

class NewsContainer extends React.Component {
    componentDidMount() {
        this.props.getPosts(this.props.currentPage, this.props.pageSize)
        document.addEventListener('scroll', this.onScroll.bind(this))
    }
    componentWillUnmount() {
        document.removeEventListener('scroll', this.onScroll)
    }
    onScroll = (e) => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight
        const scrolled = window.scrollY;
        const currentPage = this.props.currentPage;
        const pageSize = this.props.pageSize;
        const getPosts = this.props.getPosts;
        window.onscroll = function(ev) {
            if (Math.ceil(scrolled) === scrollable){
                function cureenPagedabl(currentPage) {
                        return  currentPage + 1
                }
                let count = cureenPagedabl(currentPage);
                getPosts(count,pageSize);
            }
        };
    };
    render() {
        return (
            <div className={style.wrapper}>
                {
                    this.props.posts.map((el) => {
                        return (
                            <div className={style.post} key={el.id}>
                                <Post post_info={el}/>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
let mapStateToProps = (state) => {
    return {
        posts: state.news.posts,
        pageSize: state.news.pageSize,
        currentPage: state.news.currentPage
    }
};

export default compose(
    connect(mapStateToProps, {getPosts}),
    withAuthRedirect)(NewsContainer)


// export default connect(mapStateToProps,{getPosts})(AuthRedirectComponent)