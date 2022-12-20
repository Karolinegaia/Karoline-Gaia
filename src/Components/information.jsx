import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from "react-icons/ai"
import "../Styles/information.sass";

const Information = () => {
    return <section id="information">
        <div className="infor-card">
            <AiFillPhone id="phone-icon"/>
            <div>
                <h3>Telefone</h3>
                <p>(91) 9999-9999</p>                
            </div>
        </div>
        <div className="infor-card">
            <AiOutlineMail id="email-icon"/>
            <div>
                <h3>E-mail</h3>
                <p>karolgaia@outlook.com</p>                
            </div>
        </div>
        <div className="infor-card">
            <AiFillEnvironment id="pin-icon"/>
            <div>
                <h3>Localização</h3>
                <p>Belém/PA</p>                
            </div>
        </div>
    </section>
}


export default Information
