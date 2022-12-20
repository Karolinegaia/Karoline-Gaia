import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import "../Styles/socialNetwork.sass"

const SocialMidia = [
    { name: "linkedin", icon: <FaLinkedinIn />},
    { name: "github", icon: <FaGithub />},
    { name: "instagram", icon: <FaInstagram />},

];

export function SocialNetwork () {
    return <section id="social-network">
        {SocialMidia.map((network) => (
            <a href="#" className="social-btn" id= {network.name} key= {network.name}>
            {network.icon}
            </a>
        ))}
    </section> 
}

export default SocialNetwork

