import Avatar from "../Img/Karol.jpg"
import SocialNetwork from "../Components/SocialNetwork"
import Information from "./information"
import "../Styles/sidebar.sass"

const Sidebar = () => {
    return <aside id="sidebar">
        <img src= {Avatar} alt="Karoline Gaia" />
        <p className="title">Desenvolvedora</p>
        <SocialNetwork/>
        <Information/>
        <a href="" className="btn">Currículo</a>
    </aside>;
}

export default Sidebar