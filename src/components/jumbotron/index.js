import React from "react";
import Card from "react-bootstrap/esm/Card"; 
import Banner from "../../assets/banner-placeholder.jpeg"


function Jumbo() {
return (
    <div>
         <Card>
        <Card.Img variant="top" src={Banner} alt="banner" />
        <Card.Body>
        </Card.Body>
      </Card>
</div>
);
}

export default Jumbo;