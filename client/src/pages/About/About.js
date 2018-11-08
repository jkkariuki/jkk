import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Nav from "../../components/Nav/"
import "./About.css";
import image from "../../images/profileImage.jpg" 

const About = () =>
<Container id={"aboutContainer"} fluid >

<Row>



        
        <Col size="md-6 sm-12">
        

        <div id={"imageDiv"}>
        <img style={{height: "100%" , width: "100%"}} src={image} >

        </img>


        </div>

        </Col>

        <Col size="md-6 sm-12">
        <p style={{paddingTop:"200px", color: "white"}}>
        <h1>James Kariuki</h1></p>

        <Nav style={{textAlign: "right"}}/>
        </Col>
        

    </Row>

</Container>

export default About;

