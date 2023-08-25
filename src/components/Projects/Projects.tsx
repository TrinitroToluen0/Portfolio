import "./Projects.css";
import ProjectCard from "../ProjectCard/ProjectCard.tsx";

const ProjectCardData = [
    {
        image: "https://previews.123rf.com/images/patterndesign/patterndesign1706/patterndesign170601028/80050485-resumen-de-fondo-de-imagen-16-9-relaci%C3%B3n-de-aspecto-en-el-estilo-de-arte-de-p%C3%ADxeles.jpg",
        title: "Chat Application",
        description: "Chat application made with MongoDB, Express.js and Socket.io",
        url: "https://github.com/TrinitroToluen0/ChatApp",
    },
    {
        image: "https://previews.123rf.com/images/patterndesign/patterndesign1706/patterndesign170601028/80050485-resumen-de-fondo-de-imagen-16-9-relaci%C3%B3n-de-aspecto-en-el-estilo-de-arte-de-p%C3%ADxeles.jpg",
        title: "Chat Application",
        description: "Chat application made with MongoDB, Express.js and Socket.io",
        url: "https://github.com/TrinitroToluen0/ChatApp",
    },
    {
        image: "https://previews.123rf.com/images/patterndesign/patterndesign1706/patterndesign170601028/80050485-resumen-de-fondo-de-imagen-16-9-relaci%C3%B3n-de-aspecto-en-el-estilo-de-arte-de-p%C3%ADxeles.jpg",
        title: "Chat Application",
        description: "Chat application made with MongoDB, Express.js and Socket.io",
        url: "https://github.com/TrinitroToluen0/ChatApp",
    },
    {
        image: "https://previews.123rf.com/images/patterndesign/patterndesign1706/patterndesign170601028/80050485-resumen-de-fondo-de-imagen-16-9-relaci%C3%B3n-de-aspecto-en-el-estilo-de-arte-de-p%C3%ADxeles.jpg",
        title: "Chat Application",
        description: "Chat application made with MongoDB, Express.js and Socket.io",
        url: "https://github.com/TrinitroToluen0/ChatApp",
    },
    {
        image: "https://previews.123rf.com/images/patterndesign/patterndesign1706/patterndesign170601028/80050485-resumen-de-fondo-de-imagen-16-9-relaci%C3%B3n-de-aspecto-en-el-estilo-de-arte-de-p%C3%ADxeles.jpg",
        title: "Chat Application",
        description: "Chat application made with MongoDB, Express.js and Socket.io",
        url: "https://github.com/TrinitroToluen0/ChatApp",
    },
    {
        image: "https://previews.123rf.com/images/patterndesign/patterndesign1706/patterndesign170601028/80050485-resumen-de-fondo-de-imagen-16-9-relaci%C3%B3n-de-aspecto-en-el-estilo-de-arte-de-p%C3%ADxeles.jpg",
        title: "Chat Application",
        description: "Chat application made with MongoDB, Express.js and Socket.io",
        url: "https://github.com/TrinitroToluen0/ChatApp",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="projects">
                <h2 className="projects__title">Projects</h2>
                <div className="projects__container">
                    {ProjectCardData.map((project, index) => (
                        <ProjectCard key={index} image={project.image} title={project.title} description={project.description} url={project.url}></ProjectCard>
                    ))}
                </div>
        </section>
    );
}