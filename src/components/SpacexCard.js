import React from 'react';
import { Carousel, Container, Row, Col, Image } from 'react-bootstrap';

const SpacexCard = (props) => {
	if (props.data) { // only display if the data has come in from the api fetch
		const { flight_number,
	    mission_name,
	    mission_id,
	    launch_year,
	    launch_date_utc,
	    is_tentative,
	    tentative_max_precision,
	    details,
	    rocket,
      links,
		} = props.data;

		// function renderContent() {
	  //   return (
	  //     <a href={hdurl} className="astronomy-image-wrapper">
	  //         <img src={url} alt={title} />
	  //     </a>
	  //   )
		// }

	  //console.log(props.data);

		return(
			// <div className="astronomy-card">

    // <Container>
    //   <Row>
    //     <Col xs={6} className="dragon1">{mission_name}</Col>
    //   </Row>
    //   <Row>
    //     <Col>1 of 3</Col>
    //     <Col>2 of 3</Col>
    //     <Col>3 of 3</Col>
    //   </Row>
    // </Container>

   <div>
		{/* <h6 className="astronomy-title">{capsule_serial}</h6> */}
    <h4 className="dragon1">Mission Name: {mission_name}</h4>
    <p>Rocket type: {rocket.rocket_type}</p>
    <p>Flight number: {flight_number}</p>
    <p>Description: {details}</p>
    <p>Mission id: {mission_id[0]}</p>
    <p>Launch year: {launch_year}</p>
    <p>Launch date (UTC): {launch_date_utc}</p>
    <p>Status of launch: {is_tentative}</p>
    <p>Tentative max precision: {tentative_max_precision}</p>
    <p>First_stage.cores.core: {rocket.first_stage.cores[0].core_serial}</p>

    <a >
      {/* <img src={links.flickr_images[0]} height="200px" alt="image1"/>
      <img src={links.flickr_images[1]} height="200px" alt="image1"/>
      <img src={links.flickr_images[2]} height="200px" alt="image1"/>
      <img src={links.flickr_images[3]} height="200px" alt="image1"/> */}
      {/* <img src={links.flickr_images[4]} height="200px" alt="image1"/> */}
      {/* <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image src={links.flickr_images[0]} fluid rounded />
          </Col>
          <Col xs={6} md={4}>
            <Image src={links.flickr_images[1]} fluid rounded />
          </Col>
          <Col xs={6} md={4}>
            <Image src={links.flickr_images[2]} fluid />
          </Col>
          <Col xs={6} md={4}>
            <Image src={links.flickr_images[3]} fluid rounded />
          </Col>
          <Col xs={6} md={4}>
            <Image src={links.flickr_images[4]} fluid rounded />
          </Col>
        </Row>
      </Container> */}
      <Container>
      <Col>
      <Carousel>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src={links.flickr_images[0]}
            alt="First slide"
            rounded fluid
          />
          <Carousel.Caption>
            <h3>{rocket.rocket_name}</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src={links.flickr_images[1]}
            alt="Second slide"
            rounded fluid
          />

          <Carousel.Caption>
            <h3>{rocket.rocket_name}</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src={links.flickr_images[2]}
            alt="Third slide"
            rounded fluid
          />

          <Carousel.Caption>
            <h3>{rocket.rocket_name}</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src={links.flickr_images[3]}
            alt="Fourth slide"
            rounded fluid
          />

          <Carousel.Caption>
            <h3>{rocket.rocket_name}</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src={links.flickr_images[4]}
            alt="Fifth slide"
            rounded fluid
          />

          <Carousel.Caption>
            <h3>{rocket.rocket_name}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </Col>
      </Container>


	  </a>
	</div>

		);
	}

	return <p>Waiting for data...</p>; // otherwise, display this
}

export default SpacexCard;
