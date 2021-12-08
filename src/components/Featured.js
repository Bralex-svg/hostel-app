import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
// import Lady from '../images/group.png'
import Guy from '../images/group1.png'
import Man from '../images/guy.png'
import One from '../images/one.png'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Two from '../images/two.png'
import Garant from '../images/garantee.png'
import Three from '../images/three.png'
import Vector from '../images/Vector.svg'

import './Featured.css'

function Featured() {
    return (
    <>
 <div className="box">
<Container>
  <Row>
    <Col className = "we">WHY FIND A HOSTEL WITH US?</Col>
     
  </Row>
  <Row>
    <Col className = "me">We know how stressful it is to search for a hostel.</Col>
     
  </Row>
</Container>


<Container>

{/* FIRST ROW */}

    <Row>
        <Col className = 'guy'>
        <Image  src= {Guy} alt="" />
        </Col>
        <Col  className = 'one'>
        <Image  src= {One} alt="" />
        </Col>
        <Col className = "one1">
        <h1>Affrodable Hostels</h1>
        <p>We know you are a student and do not have enough money to get an expensive hostel. So we have negotiated with the various landlords to reduce their prices for the students to be able to afford. </p>
        <Button className  = 'btn2' variant="success">LEARN MORE</Button>
         </Col>

    </Row>



{/* END OF FIRST ROW */}



{/* SECOND  ROW */}


    <Row>

    <Col className = "one2">
        <h1>Easy Bookings</h1>
        <p>We know you are a student and do not have enough money to get an expensive hostel. So we have negotiated with the various landlords to reduce their prices for the students to be able to afford. </p>
        <Button className  = 'btn3' variant="success">LEARN MORE</Button>
         </Col>


         <Col className = 'man'>
        <Image  src= {Man} alt="" />
        </Col>
        <Col  className = 'two'>
        <Image  src= {Two} alt="" />
        </Col>



    </Row>

    {/* END OF ROW */}


    
    {/* THIRD ROW */}


    <Row>
        <Col className = 'guy'>
        <Image className = "gari"  src= {Garant} alt="" />
        </Col>
        <Col  className = 'one'>
        <Image className = "milo"  src= {Three} alt="" />
        </Col>
        <Col className = "one3">
        <h1>Money Back Guaranteed</h1>
        <p>We know you are a student and do not have enough money to get an expensive hostel. So we have negotiated with the various landlords to reduce their prices for the students to be able to afford. </p>
        <Button className  = 'btn4' variant="success">LEARN MORE</Button>
         </Col>

    </Row>
  

        {/* END OF THIRD ROW */}


</Container>


</div> 

<div className = "vector"> 
<Image src  = {Vector}></Image>
</div>
<div className="vector-box">
  <h1 className = "support"> <span className = "spa"> 24/7</span>  SUPPORT</h1>
  <p className = "para">Our Support Service is available 24 hours a day, 7 days a week to help you buy your tickets.</p>
  <Button className = "btn5">Get in touch</Button>
</div>




    </>
    )
}

export default Featured
