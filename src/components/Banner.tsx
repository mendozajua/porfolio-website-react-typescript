import React from 'react';
import {useState, useEffect} from "react";
import {Col, Container, Row} from "react-bootstrap";
import { ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg"
import reptileSpace from "../assets/img/reptile-space.png"
import 'animate.css'
import TrackVisibility from 'react-on-screen';
function Banner() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Mathematician", "Full Stack Developer", "Cloud Developer"];
    const [text, setText] = useState('');
    const period = 2000;
    const [delta, setDelta] = useState(300-Math.random()*100)
    const [animate, setAnimate] = useState(false);


    useEffect(() =>{
        let ticker = setInterval(() =>{
            tick();

        },delta)
        return () => { clearInterval(ticker)};
    },[text])

    const tick = () =>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) :fullText.substring(0, text.length + 1);

        setText(updatedText);

        if(isDeleting) {
            setDelta(preDelta => preDelta/2)

        }

        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ""){
            setIsDeleting(false);
            setLoopNum(loopNum +1);
            setDelta(500);
        }
    }
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-item-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({isVisible}) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                <span className="tagline">Welcome to my Portfolio</span>
                                <h1>{`Hi I'm Juan Mendoza \n`}
                                    <span className="wrap">
                                        <div className='label-container'>
                                            <div className={isVisible ? "label label-left animate__animated animate__fadeInLeft animate__delay-1s" : ""}>{toRotate[0]}</div>
                                            <div className={isVisible ? "label label-top animate__animated animate__fadeInDown animate__delay-2s" : ""}>{toRotate[1]}</div>
                                            <div className={isVisible ? "label label-right animate__animated animate__fadeInRight animate__delay-3s": ""}>{toRotate[2]}</div>
                                        </div>
                                    </span>
                                </h1>
                                <p>I am a cybersecurity engineer at FINRA . In my current role, I specialize in leveraging AWS cloud technologies to design and implement secure solutions that meet security compliance. With expertise in Java, Spring, React, and Python, I am well-equipped to build scalable, user-friendly applications that solve complex problems and drive business success.</p>
                                {/*<button onClick={() => console.log('connect')}>Let's Connect<ArrowRightCircle size={25}/> </button>*/}


                            </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={reptileSpace} alt="Headder Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Banner;