import React from 'react'
import Carousel from 'react-bootstrap/Carousel' 
import Hostel1 from '../images/hostel1.jpg'
import Hostel2 from '../images/hostel2.jpg'
import Hostel3 from '../images/hostel3.jpeg' 
import './LandingSection.css'
import Button from 'react-bootstrap/Button'

function LandingSection() {
    return (
        <>
            <Carousel fade pause = {false} >
  <Carousel.Item className = 'caro' >
   

   
    <img
      className="d-block w-100 "
      src= {Hostel1}
      alt="First slide"
    />
  
    <Carousel.Caption className = "caption">
      <h3>SSNIT HOSTEL</h3>
      <p>Get the most out of this awesome Hostel</p>
      <Button className  = 'btn1' variant="success">Check it Out</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  
 
    <img
      className="d-block w-100 "
      src= {Hostel2}
      alt="Second slide"
    />
         
      
    <Carousel.Caption className = "caption">
      <h3>DOLLAR HOSTEL</h3>
      <p>This hostel is a one of the fun loving hostels on campus.</p>
      <Button className  = 'btn1' variant="success">Check it Out</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>

    

    <img
      className="d-block w-100 "
      src= {Hostel3}
      alt="Third slide"
    />
          
      
    <Carousel.Caption className = "caption">
      <h3>TRASSCO HOSTEL</h3>
      <p>This particular hoste is mostly populated by ladies.</p>
      <Button className  = 'btn1' variant="success">Check it Out</Button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>



        </>
    )
}

export default LandingSection
