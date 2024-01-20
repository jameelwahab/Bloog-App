import React, { useState } from 'react'
import post_list from '../utills';
import { Link } from 'react-router-dom';

function Postlisting() {
    const [message, setMessage] = useState([]);
    const seenMessage = (id) => {
        const mts = id;
        setMessage([...message, mts]);
    }
    const post = post_list.map((value) => (<div className='post-list-content-detail' key={value.id} onClick={() => seenMessage(value.id)}>
        {/* <Link to={`/${value.id}`}> */}
        <p>
            {
                message.includes(value.id) ? "seen" : "unseen"
            }
        </p>
        <h2>{value.title}</h2>
        <p className=''>{value.body}</p>
        {/* </Link> */}
    </div>))
    return (
        <section className='post-list mb-5'>
            <div className='post-list-content'>{post}</div>
        </section>
    )
}

export default Postlisting;