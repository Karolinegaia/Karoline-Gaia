import Avatar from "../Img/Karol.jpg"
import "../Styles/sidebar.sass"

const Sidebar = () => {
    return <aside id="sidebar">
        <img src= {Avatar} alt="Karoline Gaia" />
        <p className="title">Desenvolvedora Front-End</p>
        <p>Redes Sociais</p>
        <p>Contato</p>
        <a href="" className="btn">Currículo</a>
    </aside>;
}

export default Sidebar