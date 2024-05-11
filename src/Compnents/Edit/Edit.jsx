import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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
        <div className='NewPost'>
            <form >
                <div>
                    <label htmlFor="">Post Title</label>
                    <input className='input' onChange={handleChange} value={formData.title} name='title' type="text" />
                </div>
                <textarea value={formData.body} onChange={handleChange} name="body" style={{ width: "80%", resize: "none" }} rows={7}></textarea>
                <div>
                    <button onClick={(e) => handleUpdate(e)} className='btn'>
                        Update Post
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Edit