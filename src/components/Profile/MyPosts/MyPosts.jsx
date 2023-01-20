import React from 'react'
import s from './MyPosts.module.css'


const MyPosts = (props) => {
    return (
        <div className={s.img}>
            <img src="https://images.unsplash.com/photo-1612975702762-7cc2733b3e75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
            <button>Add like</button>
        </div>
    )
}

export default MyPosts;