import React from 'react';
import godzilla from "../assets/img/GodzillaSleep.jpg";
import zuzu from "../assets/img/ZuzuTongueOut.jpg";
import mufasa from "../assets/img/Mufasa_cattower.jpg";
import medusa from "../assets/img/Medusa_HangingOut.jpg";
import kratos from "../assets/img/Kratos_peri_zoomedOut.jpg";
import nagini from "../assets/img/CuriousNagini.jpg";
import {Col, Container, Nav,Tab, Row} from "react-bootstrap";
import projectCard from "./ProjectCard";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png"
import reptileSpace from "../assets/img/reptile-space_preview_rev_1.png"
import 'animate.css'
import TrackVisibility from 'react-on-screen';
import colorSharp from "../assets/img/color-sharp.png";
import { Document, Page, pdfjs,  } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
function Projects() {
    const projects = [
        {
            title: "Mufasa",
            description: "Named after a character from Lion King, a favorite film from my childhood. Very well behaved cat with some mischief here and there. But overall very kind/sweet and energetic.",
            imgUrl: mufasa,
        },
        {
            title: "ZuZu",
            description: "Adopted recently this sweet cat, so Mufasa could have someone to play with. She loves voicing her opinion and loves pets just as much as the next. Update: She loves pets so much she intercepts pets.",
            imgUrl: zuzu,
        },
        {
            title: "Nagini",
            description: "Red Fancy corn snake. I have no idea what sex is, but was named after a character from Harry Potter. I got Nagini when he/she was about 3-4 months old. Enjoys to watch what goes on in the room form his/her \"hides\".",
            imgUrl: nagini,
        },
        {
            title: "Kratos",
            description: "Kratos is a male Enchi Hypo ball python, I got him when he was about 6-8 months old. He is the olds snake I own and his size definitely says it.",
            imgUrl: kratos,
        },
        {
            title: "Medusa",
            description: "Medusa is a Blue Eye Leucistic (BEL) female ball python. I got Medusa when she was about 1 month old, so pretty much a baby. Again she has come quite a long way and is my most handlable snake.",
            imgUrl: medusa,
        },
        {
            title: "Godzilla",
            description: "My last pet is a normal leopard gecko, I have no idea when his/her sex is. But this little buddy loves to interact. Esspecially during feeding time will likes to come out of his/her encolsure.",
            imgUrl: godzilla,
        },
    ]
    const path = './Software_Engineer_Resume_JM.pdf'

    const width = window.innerWidth;
    const height = window.innerHeight;

    console.log(`Window size is ${width} x ${height}`);
    return (
        <section className="about" id="abouts">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({isVisible}) =>
                                <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                        <h2>About Me</h2>
                        <p>Some personal things about my life that I am proud and happy to share.</p>
                        </div>}
                        </TrackVisibility>
                            <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Pets</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Resume</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">
                                        Personal Projects
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return(
                                                    <ProjectCard key={index} title={project.title} description={project.description} imgUrl={project.imgUrl}/>
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        <section className="skill" id="skills">
                                            <Container>
                                                <Row>
                                                    <Col >
                                                        <div className="skill-bx" style={{
                                                            width: '100%',
                                                            height:"calc(100% - 20px)", // subtracted 20px from the height
                                                            overflow:"hidden",
                                                            backgroundColor: 'white',
                                                            marginTop: 10
                                                        }}>
                                                            <h2>
                                                                Resume
                                                            </h2>
                                                            <div className="align-items-center2" >
                                                                <Document
                                                                    file={path}
                                                                    onLoadError={console.error}
                                                                >
                                                                    <Page
                                                                        pageNumber={1}
                                                                        width={Math.min(width * 0.9, 800)}
                                                                        renderTextLayer={false}
                                                                        renderAnnotationLayer={false}/>
                                                                </Document>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Container>
                                            <img className="background-image-left" src={colorSharp}/>
                                        </section>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">Loren Ipsum</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    );
}

export default Projects;