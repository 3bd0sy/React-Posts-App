import { useState } from 'react'
import "./NewPost.css"
import axios from 'axios'

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
        axios.post("https://jsonplaceholder.typicode.com/posts")
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
        <div className='NewPost'>
            <form>
                <div className=''>
                    <label htmlFor="">Post Title</label>
                    <input className='input' onChange={handleChange} value={formData.title} name='title' type="text" />
                </div>
                <textarea value={formData.body} onChange={handleChange} name="body" style={{ width: "80%", resize: "none" }} rows={7}></textarea>
                <div>
                    <button onClick={handleSend} className='btn'>
                        Send Post
                    </button>
                </div>
            </form>
        </div>
    )
}

export default NewPost
