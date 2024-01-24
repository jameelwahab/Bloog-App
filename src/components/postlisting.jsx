import React, { useState } from 'react'
import post_list from '../utills';
import { Link } from 'react-router-dom';
import Banner from './banner';

function Postlisting() {
    const [list, setList] = useState(post_list)

    // delete function 
    const deletePost = (id) => {
        const result = list.filter((dell) => dell.id != id)
        setList(result)
    }

    // seen & unseen function 
    const [message, setMessage] = useState([]);
    const seenMessage = (id) => {
        const mts = id;
        setMessage([...message, mts]);
    }
    const post = list.map((value) => (<div className='post-list-content-detail mb-5' key={value.id} onClick={() => seenMessage(value.id)}>
        <Link to={`/${value.id}`}>
            <p>
                {
                    message.includes(value.id) ? "seen" : "unseen"
                }
            </p>
            <h2>{value.title}</h2>
            <p>{value.body}</p>
        </Link>
        <button className='mt-5 delete-btn' onClick={() => deletePost(value.id)}>Delete</button>
    </div>))
    return (
        <>
            <Banner />
            <section className='post-list mb-5'>
                <div className='post-list-content'>{post}</div>
            </section>
        </>

    )
}

export default Postlisting;