import About from "../Components/AboutContainer"
import Tecnologia from "../Components/TecnologiaContainer"
import Projetos from "../Components/Projects"
import "../Styles/mainContent.sass"

const MainContent = () => {
    return (
        <main id="main-content">
            <About/>
            <Tecnologia/>
            <Projetos/>
        </main>
    )
}

export default MainContent