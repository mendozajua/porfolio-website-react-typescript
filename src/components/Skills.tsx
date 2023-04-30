import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Col, Container, Row} from "react-bootstrap";
import meter1 from "../assets/img/meter1.svg"
import meter2 from "../assets/img/meter2.svg"
import meter3 from "../assets/img/meter3.svg"
import colorSharp from "../assets/img/color-sharp.png"
import { Document, Page, pdfjs,  } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;






function Skills() {

    const path = './Software_Engineer_Resume_JM.pdf'
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const width = window.innerWidth;
    const height = window.innerHeight;

    console.log(`Window size is ${width} x ${height}`);
    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col >
                        <div className="skill-bx" style={{
                                width: '100%',
                                height:"calc(100% - 20px)", // subtracted 20px from the height
                                overflow:"hidden",
                                backgroundColor: 'white',
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
                                        renderTextLayer={false}/>
                                </Document>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp}/>
        </section>
    );
}

export default Skills;