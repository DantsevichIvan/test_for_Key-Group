import React from 'react'



const Post = (props) =>{
    return(
        <div>
            <span>{props.post_info.title}</span>
            <span>{props.post_info.body}</span>
        </div>
    )

}

export  default Post