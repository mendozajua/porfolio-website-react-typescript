import React from 'react';
import {Col} from "react-bootstrap";

interface Iproject{
    title:string;
    description:string;
    imgUrl:string
}


function ProjectCard(prop:Iproject) {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={prop.imgUrl}/>
                <div className="proj-txtx">
                    <h4>{prop.title}</h4>
                    <span>{prop.description}</span>
                </div>
            </div>
        </Col>
    );
}

export default ProjectCard;