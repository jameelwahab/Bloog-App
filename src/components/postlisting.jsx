import React, { useEffect, useState } from 'react'
import post_list from '../utills';
import { Link } from 'react-router-dom';
import Banner from './banner';
import axios from 'axios';

function Postlisting() {
    const [mess, setMess] = useState(null);

    const [list, setList] = useState([])
    const fetchData = async () => {
        const apiData = {
            url: "https://jsonplaceholder.typicode.com/posts",
            method: "GET",
        }
        const result = await axios(apiData)
        if (result.status == 200) {
            setList(result.data)
        }
    }

    useEffect(() => {
        fetchData()
    },
        []
    )





    // if (list === null) {
    //     return <div>
    //         <p>Loading...</p>
    //     </div>
    // }


    // axios function 
    // const fetchData = async () => {
    //     try {
    //         axios.get("https://jsonplaceholder.typicode.com/posts")
    //             .then(response => {
    //                 console.log(response);
    //                 setList(response.data)

    //             })
    //     } catch (error) {
    //         console.error("error fatching data", error)
    //     }
    // }

    // // use useeffect 
    // useEffect(() => {
    //     fetchData()
    // },
    //     []
    // )


    // delete function 
    const deletePost = (id) => {
        const result = list.filter((dell) => dell.id != id)
        setList(result);
        setMess(false);
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
        {mess === value.id &&
            (
                <div>
                    <p className='delete-mess'>Do you wana delete ?</p>
                    <button className='mt-3 me-5' onClick={() => deletePost(value.id)}>Yes</button>
                    <button onClick={() => setMess(null)}>No</button>
                </div>

            )
        }
        {mess != value.id && (
            <button className='mt-5 delete-btn' onClick={() => setMess(value.id)}>Delete</button>
        )

        }

    </div>))
    // if (list == null) {
    //     return <div id='loading'><p style={{ color: 'red' }}>Loading...</p></div>
    // }
    return (
        <>
            <Banner />
            <section className='post-list mb-5'>
                {list == null &&
                    <div id='loading'><p style={{ color: 'red' }}>Loading...</p></div>
                }
                <div className='post-list-content'>{post}</div>
            </section>
        </>

    )
}

export default Postlisting;