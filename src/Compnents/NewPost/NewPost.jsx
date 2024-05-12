import { useState } from 'react'
import "./NewPost.css"
import axios from 'axios'
import PostForm from '../PostForm/PostForm'

const NewPost = () => {
    const [formData, setFormData] = useState({
        title: "",
        body: ""
    })

    /* store data in the formdata object */
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        console.log(formData)
    }
    /* send object using API */
    const handleSend = (e) => {
        e.preventDefault()
        /*handle empty field */
        if (formData.title.length + formData.body.length > 5)
            axios.post("https://jsonplaceholder.typicode.com/posts", formData)
                .then((res) => {
                    console.log(res)
                    alert("Post hase been ceated successfully")
                    setFormData({
                        title: "",
                        body: ""
                    })
                })
                .catch((err) => console.log(err))
    }
    return (
        <PostForm formData={formData} handleSend={handleSend} handleChange={handleChange} buttonText={"Send Post"} />
    )
}

export default NewPost
