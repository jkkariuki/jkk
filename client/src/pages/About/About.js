import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Nav from "../../components/Nav/"
import "./About.css";
import image from "../../images/profileImage.jpg" 

const About = () =>
<Container id={"aboutContainer"} fluid >

<Row style={{backgroundColor : "green"}}>



<Nav id={"nav"}/>

        <Col id={"imageDiv"} size="md-6 sm-12">
        

        <div >
        <img style={{height: "100%" , width: "100%"}} src={image} >

        </img>


        </div>

        </Col>

        <Col size="md-6 sm-12">

        <p style={{paddingTop:"150px", color: "white", fontSize: "20px"}}>
        <h1>James Kariuki</h1>
        Cras id massa ut leo faucibus gravida. Quisque eu lacus gravida, auctor tortor ac, elementum ligula. Quisque ac odio semper, facilisis ante in, ornare purus. Proin convallis neque vehicula lorem feugiat accumsan. Integer commodo ipsum lorem, ac sodales lectus rhoncus nec. Phasellus consectetur arcu ac lectus porttitor dapibus. Cras mattis venenatis vulputate. Pellentesque mauris nunc, luctus nec nunc ac, laoreet tristique diam. Aenean ac efficitur dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        </Col>
        

    </Row>

</Container>

export default About;

