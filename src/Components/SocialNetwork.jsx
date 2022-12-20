import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import "../Styles/socialNetwork.sass"

const SocialMidia = [
    { name: "linkedin", icon: <FaLinkedinIn />, link: <a href="https://www.linkedin.com/in/karoline-gaia-alexandre/"/>},
    { name: "github", icon: <FaGithub />, link: <a href="https://github.com/Karolinegaia"/>},
    { name: "instagram", icon: <FaInstagram />, link: <a href="https://www.instagram.com/karolinegaia/"/> },

];

export function SocialNetwork () {
    return <section id="social-network">
        {SocialMidia.map((network) => (
            <a href={network.link} className="social-btn" id= {network.name} key= {network.name}>
            {network.icon}
            </a>           
        ))}
    </section> 
}

export default SocialNetwork

