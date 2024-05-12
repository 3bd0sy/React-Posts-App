import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostForm from '../PostForm/PostForm'

const Edit = () => {
    const [formData, setFormData] = useState({
        title: "",
        body: ""
    })

    const { id } = useParams();

    /* store data in the formdata object */
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => {
                setFormData({
                    title: res.data.title,
                    body: res.data.body
                })
            })
    }, [])

    /* update object using API */
    const handleUpdate = (e) => {
        e.preventDefault()
        axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => {
                console.log(res)
                alert("Post hase been Updated successfully")
            })
            .catch((err) => console.log(err))
    }
    return (
        <PostForm formData={formData} handleSend={handleUpdate} handleChange={handleChange} buttonText={"Update Post"} />
    )
}

export default Edit