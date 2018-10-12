import React from 'react';
//import axios from 'axios';

const SpacexCard = (props) => {

	const { id,
    name,
    type,
    active,
    crew_capacity,
    sidewall_angle_deg,
    orbit_duration_yr,
    dry_mass_kg,
    dry_mass_lb,
    first_flight,
	} = props.data;

	// function renderContent() {
  //   return (
  //     <a href={hdurl} className="astronomy-image-wrapper">
  //         <img src={url} alt={title} />
  //     </a>
  //   )
	// }



	return (
		// <div className="astronomy-card">
    <div>

			{/* <h6 className="astronomy-title">{capsule_serial}</h6> */}
      <h4 className="dragon1">{name}</h4>
      <p>id: {id}</p>
      <p>type: {type}</p>
      <p>active: {active}</p>
      <p>crew_capacity: {crew_capacity}</p>
      <p>sidewall_angle_deg: {sidewall_angle_deg}</p>
      <p>orbit_duration_yr: {orbit_duration_yr}</p>
      <p>dry_mass_kg: {dry_mass_kg}</p>
      <p>dry_mass_lb: {dry_mass_lb}</p>
      <p>first_flight: {first_flight}</p>

			{/* {renderContent()}

			<p>{explanation}</p>

			<span>{date}, {copyright}</span> */}

		</div>
	)
}

export default SpacexCard;
