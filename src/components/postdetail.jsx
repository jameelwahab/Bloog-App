import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


function Postdetail() {
    const params = useParams();
    // const post = getPost(params.id)


    const [apidetail, setApidetail] = useState(null);
    console.log(apidetail);
    const getchApiDetail = async () => {
        const apiDataDetail = {
            url: `https://jsonplaceholder.typicode.com/posts/${params.id}`,
            method: "GET"
        }
        const detailResult = await axios(apiDataDetail)
        console.log(detailResult);
        if (detailResult.status == 200) {
            setApidetail(detailResult.data)
        }
    }
    useEffect(() => {
        getchApiDetail()
    },
        [])

    const navigate = useNavigate();
    console.log(navigate)


    if (apidetail == null) {
        return <div>
            <p>Loading...</p>
        </div>
    }
    return (
        <>
            <div className='card card-detail mb-5'>
                <h2>{apidetail.title}</h2>
                <p>{apidetail.body}</p>
            </div>

            <button className='back-button main-btn mx-auto' onClick={() => navigate(-1)}><i class="fa-solid fa-caret-left"></i> Back</button>
        </>
    )
}

export default Postdetail;