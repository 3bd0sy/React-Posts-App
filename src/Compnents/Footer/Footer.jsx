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
                <div>Facebook</div>
                <div>LinkedIn</div>
                <div>Twitter</div>
                <div>Whatsapp</div>
            </div>


            {/**Right */}
            <div className='FRight'>
                <h2>Other Sites:</h2>
                <div>Post App</div>
                <div>Post Game</div>
                <div>Message App</div>
                <div>Wiki App</div>
            </div>


        </footer>
    )
}

export default Footer
