import "./Footer.css"
import { MessageCircleMore } from 'lucide-react'
const Footer = () => {
    return (
        <footer className='Footer'>

            {/**Left */}
            <div className='FLeft'>
                <div className='FLeft-Top'>
                    <MessageCircleMore size={32} />
                    <h1>Post App</h1>
                </div>
                <p>
                    Copyright @ 1999-2024. Abdulbasit Abdulghani. All rights reserved.
                </p>
                <p>
                    Read the complete Terms of Use for more information.
                </p>
            </div>


            {/**Center */}
            <div className='FCenter'>
                <h2>Contact us:</h2>
                <div className="pointer">Facebook</div>
                <div className="pointer">LinkedIn</div>
                <div className="pointer">Twitter</div>
                <div className="pointer">Whatsapp</div>
            </div>


            {/**Right */}
            <div className='FRight'>
                <h2>Other Sites:</h2>
                <div className="pointer">Post App</div>
                <div className="pointer">Post Game</div>
                <div className="pointer">Message App</div>
                <div className="pointer">Wiki App</div>
            </div>
        </footer>
    )
}

export default Footer
