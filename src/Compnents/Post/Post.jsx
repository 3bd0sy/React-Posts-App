import { useEffect, useState } from 'react'
import axios from 'axios'
import "./Post.css"
import { useNavigate, useParams } from 'react-router-dom'

const Post = () => {
    const [post, setPost] = useState([])
    const { id } = useParams();
    const navigate = useNavigate()
    // fetch data
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((result) => {
            setPost(result.data)
        }
        ).catch((error) => console.log(error))
    }, [id])


    const handleUpdate = (id) => {
        navigate(`/edit/${id}`)
    }
    const handleDelete = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id + 1}`)
            .then((result) => {
                console.log(result.status)
                alert(`post has been deleted ...\n code: ${result.status}`)
                navigate("/")
            })
            .catch((err) => console.log(err))
    }
    return (
        <div className='SinglePost'>
            {/**Title */}
            <h1 className='SinglePTitle'>Our Post</h1>

            {/**Data */}
            <div className='SinglePData'>
                {post.length === 0 ?
                    <div> Fetching Data ... </div> :
                    <div>
                        < div className='SinglePCard' key={id}>
                            <div className='inputDiv'>
                                <h3>
                                    {post.title.length <= 30 ?
                                        post.title :
                                        post.title.slice(0, 30) + "..."}
                                </h3>
                                <p>
                                    {post.body}
                                </p>
                            </div>

                            <div className='PostBtn'>
                                <button onClick={() => handleUpdate(post.id)}>update</button>
                                <button onClick={() => handleDelete(post.id)}>delete</button>
                            </div>
                        </div>
                    </div>
                }
            </div >
        </div >
    )
}

export default Post;
