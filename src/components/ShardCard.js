import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button
} from "shards-react";

const ShardCard = (props) => {
	if (props.data) { // only display if the data has come in from the api fetch
		const { flight_number,
	    mission_name,
	    mission_id,
	    launch_year,
	    launch_date_unix,
	    launch_date_utc,
	    launch_date_local,
	    is_tentative,
	    tentative_max_precision,
	    details,
	    rocket,
      links,
		} = props.data;

		return (
			// <div className="astronomy-card">

      <Card style={{ maxWidth: "300px" }}>
        <CardHeader>Card header</CardHeader>
        <CardImg src="https://place-hold.it/300x200" />
        <CardBody>
          <CardTitle>Lorem Ipsum</CardTitle>
          <p>Lorem ipsum dolor sit amet.</p>
          <Button>Read more &rarr;</Button>
        </CardBody>
        <CardFooter>Card footer</CardFooter>
      </Card>

	    // <div>
	    //   <h4 className="dragon1">{mission_name}</h4>
	    //   <p>flight_number: {flight_number}</p>
	    //   <p>details: {details}</p>
	    //   <p>mission_id: {mission_id[0]}</p>
	    //   <p>launch_year: {launch_year}</p>
	    //   <p>launch_date_unix: {launch_date_unix}</p>
	    //   <p>launch_date_utc: {launch_date_utc}</p>
	    //   <p>launch_date_local: {launch_date_local}</p>
	    //   <p>is_tentative {is_tentative}</p>
	    //   <p>tentative_max_precision: {tentative_max_precision}</p>
	    //   <p>rocket_id: {rocket.rocket_id}</p>
      //   <p>rocket_name: {rocket.rocket_name}</p>
      //   <p>rocket_type: {rocket.rocket_type}</p>
      //   <p>first_stage.cores.core: {rocket.first_stage.cores[0].core_serial}</p>
      //
      //   <a >
      //     <img src={links.flickr_images[0]} height="200px" alt="image1"/>
    	//   </a>
			// </div>
      
		);
	}

	return <p>Waiting for data...</p>; // otherwise, display this
}

export default ShardCard;
