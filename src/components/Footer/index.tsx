import { Footer } from './style'
import { AiFillLinkedin, AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'

export default function index() {
  return (
    <Footer>
        <div>
            <p>&copy; 2023 - Otoniel Emanuel</p>
        </div>
        <div>
            <ul>
                <li><a href=""><AiFillLinkedin /></a></li>
                <li><a href=""><AiFillInstagram /></a></li>
                <li><a href=""><AiOutlineTwitter /></a></li>
            </ul>
        </div>
    </Footer>
  )
}
