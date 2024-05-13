import { MessageCircleMore } from 'lucide-react'
import "./Header.css"
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
const Header = () => {
    const [showButtons, setShowButtons] = useState(true)
    const navigate = useNavigate()

    const handleClick = (location) => {
        navigate(location)
    }
    const handleBars = () => {
        setShowButtons(false)
    }

    return (
        <header className='Header'>
            {/**Left */}
            <div className='HLeft'>
                {/**Logo */}
                <MessageCircleMore size={32} />
                <h1>
                    <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                        Post App
                    </Link>
                </h1>
            </div>


            {/**Right */}
            <div className={`HRight`}>
                <button onClick={() => handleClick("/")}>Home</button>
                <button onClick={() => handleClick("/add-post")} >Add Post</button>
                <button onClick={() => handleClick("/about")}>About</button>
            </div>
            {
                showButtons ? <div className='bars' onClick={handleBars}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                    </svg>
                </div>
                    :
                    <div className={`HRight-Show`}>
                        <button onClick={() => handleClick("/")}>Home</button>
                        <button onClick={() => handleClick("/add-post")} >Add Post</button>
                        <button onClick={() => handleClick("/about")}>About</button>
                    </div>
            }
        </header>
    )
}

export default Header