import React from 'react';
//import axios from 'axios';

const SpacexCard = (props) => {

	const { id
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

      <p>{id}</p>

			{/* {renderContent()}

			<p>{explanation}</p>

			<span>{date}, {copyright}</span> */}

		</div>
	)
}

export default SpacexCard;
