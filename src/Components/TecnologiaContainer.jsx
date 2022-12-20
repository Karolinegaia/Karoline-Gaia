import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiMysql,
    DiReact,
  } from "react-icons/di";
  
import "../Styles/Tecnologia.sass"

const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 /> },
    { id: "css", name: "CSS3", icon: <DiCss3 /> },
    { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
    { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
    { id: "mysql", name: "MySQL", icon: <DiMysql /> },
    { id: "react", name: "React", icon: <DiReact /> },
  ];

const Tecnologia = () => {
    return (
        <section className="tecnologia-container">
          <h2>Tecnologias</h2>
          <div className="tecnologia-grid">
            {technologies.map((tech) => (
              <div className="tecnologia-card" id={tech.id} key={tech.id}>
                {tech.icon}
                <div className="tecnologia-info">
                  <h3>{tech.name}</h3>
                  <p>Utilizado para desenvolvimento web.</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      );
}

export default Tecnologia