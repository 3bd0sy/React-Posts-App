
const PostForm = ({ formData, handleSend, handleChange, buttonText }) => {
    return (
        <div className='NewPost'>
            <form>
                <div className=''>
                    <label htmlFor="">Post Title</label>
                    <input className='input' onChange={handleChange} value={formData.title} name='title' type="text" />
                </div>
                <textarea value={formData.body} onChange={handleChange} name="body" style={{ width: "80%", resize: "none" }} rows={7}></textarea>
                <div>
                    <button onClick={handleSend} className='btn pointer'>
                        {buttonText}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default PostForm
