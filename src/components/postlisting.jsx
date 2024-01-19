import React from 'react'
import post_list from '../utills';
import { Link } from 'react-router-dom';

function Postlisting() {
    const post = post_list.map((value) => (<div key={value.id}>
        <Link to={`/${value.id}`}>
            <h2>{value.title}</h2>
            <p>{value.body}</p>
        </Link>
    </div>))
    return (
        <div>{post}</div>
    )
}

export default Postlisting;