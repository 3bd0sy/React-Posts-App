import { MessageCircleMore } from 'lucide-react'
import "./Header.css"
import { useNavigate } from 'react-router-dom'
const Header = () => {
    const navigate = useNavigate()

    const handleClick = (location) => {
        navigate(location)
    }

    return (
        <header className='Header'>
            {/**Left */}
            <div className='HLeft'>
                {/**Logo */}
                <MessageCircleMore size={32} />
                <h1>Post App</h1>
            </div>


            {/**Right */}
            <div className='HRight'>
                <button onClick={() => handleClick("/")}>Home</button>
                <button onClick={() => handleClick("/add-post")} >Add Post</button>
                <button onClick={() => handleClick("/about")}>About</button>
            </div>
        </header>
    )
}

export default Header