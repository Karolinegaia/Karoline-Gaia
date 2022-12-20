import Avatar from "../Img/Karol.jpg"
import SocialNetwork from "../Components/SocialNetwork"
import Information from "./information"
import "../Styles/sidebar.sass"
import "../Img/Currículo.png"

const Sidebar = () => {
    return <aside id="sidebar">
        <img src= {Avatar} alt="Karoline Gaia" />
        <p className="title">Desenvolvedora</p>
        <SocialNetwork/>
        <Information/>
        <a href="https://www.linkedin.com/in/karoline-gaia-alexandre/" className="btn">Currículo</a>
    </aside>;
}

export default Sidebar