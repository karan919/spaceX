import React from 'react';

import './Filter.css';

const Filter = props => {
    const handleFilterYear = (year)=> {
        props.setYear(year);
    }
    const handleFilterLaunch = (launch)=> {
        props.setLaunch(launch)
    }
    const handleFilterLanding = (landing)=> {
        props.setLanding(landing)
    } 

    let list=[];
    for(let i=2006;i<=2020;i++){
        list.push(<li key={i} className={`btn ${props.year===i?"active":""}`} onClick={()=>handleFilterYear(i)}>{i}</li>);
    }
  return (
    <div className="filter-box">
      <h2>Filters</h2>
      <h3 className="center-title">Launch Year</h3>
      <hr/>
      <ul className="flex-container">
          {list}
      </ul>
      <h3 className="center-title">Successful Launch</h3>
      <hr/>
      <ul className="flex-container">
          <li className={`btn ${props.launch===true?"active":""}`} onClick={()=>handleFilterLaunch(true)}>True</li>
          <li className={`btn ${props.launch===false?"active":""}`} onClick={()=>handleFilterLaunch(false)}>False</li>
      </ul>
      <h3 className="center-title">Successful Landing</h3>
      <hr/>
      <ul className="flex-container">
          <li className={`btn ${props.landing===true?"active":""}`} onClick={()=>handleFilterLanding(true)}>True</li>
          <li className={`btn ${props.landing===false?"active":""}`} onClick={()=>handleFilterLanding(false)}>False</li>
      </ul>
    </div>
  );
};

export default Filter;
