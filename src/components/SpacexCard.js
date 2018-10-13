import React from 'react';
//import axios from 'axios';

const SpacexCard = (props) => {

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
    launch_site: site_id,
	} = props.data;

	// function renderContent() {
  //   return (
  //     <a href={hdurl} className="astronomy-image-wrapper">
  //         <img src={url} alt={title} />
  //     </a>
  //   )
	// }
  console.log(props.data);

	return (
		// <div className="astronomy-card">
    <div>

			{/* <h6 className="astronomy-title">{capsule_serial}</h6> */}
      <h4 className="dragon1">{mission_name}</h4>
      <p>flight_number: {flight_number}</p>
      <p>details: {details}</p>
      <p>mission_id: {mission_id}</p>
      <p>launch_year: {launch_year}</p>
      <p>launch_date_unix: {launch_date_unix}</p>
      <p>launch_date_utc: {launch_date_utc}</p>
      <p>launch_date_local: {launch_date_local}</p>
      <p>is_tentative {is_tentative}</p>
      <p>tentative_max_precision: {tentative_max_precision}</p>
      {/* <p>launch_site.site_name_long: {props.data.launch_site.site_name_long}</p> */}


			{/* {renderContent()}
			<p>{explanation}</p>
			<span>{date}, {copyright}</span> */}
		</div>
	)
}

export default SpacexCard;
