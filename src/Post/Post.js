import React from 'react';
import './Post.css';
const post = (props) =>{
    return(
        <div className="Post">
        <p>{props.content}</p>
        </div>
    )
}

export default post;