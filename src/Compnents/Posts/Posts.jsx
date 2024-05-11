import { useEffect, useState } from 'react'
import axios from 'axios'
import "./Posts.css"
import { useNavigate } from 'react-router-dom'

const Posts = () => {
    const [posts, setPosts] = useState([])
    const navigate = useNavigate()
    // fetch data
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((result) => {
            setPosts(result.data)
        }
        ).catch((error) => console.log(error))
    }, [])


    const handleClick = (id) => {
        navigate(`/details/${id + 1}`)
    }

    // edit post
    // const handleEdit = (e, id) => {
    //     e.stopPropagation()
    //     navigate(`/edit/${id + 1}`)
    // }

    // const handleDelete = (e, id) => {
    //     e.stopPropagation()
    //     axios.delete(`https://jsonplaceholder.typicode.com/posts/${id + 1}`)
    //         .then((result) => {
    //             console.log(result.status)
    //             alert(`post has been deleted ...\n code: ${result.status}`)
    //         })
    //         .catch((err) => console.log(err))
    // }
    return (
        <div className='Posts'>
            {/**Title */}
            <h1 className='PTitle'>Our Posts</h1>

            {/**Data */}
            <div className='PData'>
                {posts.length === 0 ?
                    <div> Fetching Data ... </div> :
                    posts.slice(0, 20).map((element, id) => {
                        return <div onClick={() => handleClick(id)} className='PCard' key={id}>

                            <h3>
                                {element.title.length <= 30 ?
                                    element.title :
                                    element.title.slice(0, 30) + "..."}
                            </h3>
                            <p>
                                {element.body}
                            </p>

                            {/* <div>
                                <button onClick={(e) => handleEdit(e, element.id)}>edit</button>
                                <button onClick={(e) => handleDelete(e, element.id)}>delete</button>
                            </div> */}
                        </div>
                    })
                }
            </div>
        </div >
    )
}

export default Posts
