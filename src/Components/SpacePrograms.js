import React from 'react';

import './SpacePrograms.css';

const SpacePrograms = props => {
    let list = [];
    if(props.data && props.data[0]){
        list= props.data.map((ship ,index)=>{
            return(
            <li key={ship.mission_name} className="missionCard">
                <img src={ship.links.mission_patch_small} alt={ship.mission_name}/>
                <div className="mission-info">
                    <p className="mission-name">{ship.mission_name} #{index+1}</p>
                    <p>Mission Id:  {ship.mission_id[0] || "Not Available"}</p>
                    <p>Launch Year: {ship.launch_year}</p>
                    <p>Successful Launch: {ship.launch_success?"True":"False"}</p>
                    <p>Successful Landing: {ship.launch_landing?"True":"False"}</p>
                </div>
            </li>
            );
        });
    }
  

  return (
    <div className="spacePrograms-box">
        <ul className="flex-container">
            {list}
        </ul>
    </div>
  );
};

export default SpacePrograms;
