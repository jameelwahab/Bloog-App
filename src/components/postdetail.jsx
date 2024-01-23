import React from 'react'
import { useParams } from 'react-router-dom';
import { getPost } from '../utills';


function Postdetail() {
    const params = useParams();
    const post = getPost(params.id)
    return (
        <>
            <div className='card card-detail mb-5'>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
        </>
    )
}

export default Postdetail;