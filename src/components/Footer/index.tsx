import { Footer } from "./style";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

export default function index() {
  return (
    <Footer>
      <div>
        <p>&copy; 2023 - Otoniel Emanuel</p>
      </div>
      <div>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/euotiniel/" target="_blank">
              <AiFillLinkedin />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/euotiniel/" target="_blank">
              <AiFillInstagram />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/euotiniel" target="_blank">
              <AiOutlineTwitter />
            </a>
          </li>
        </ul>
      </div>
    </Footer>
  );
}
