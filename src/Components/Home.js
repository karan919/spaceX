import React, {useState, useEffect} from 'react';
import Filter from './Filter';
import SpacePrograms from './SpacePrograms';

import './Home.css';

const Home = () => {
    const [year, setYear] = useState(null);
    const [launch, setLaunch] = useState(null);
    const [landing, setLanding] = useState(null);
    const [missionData, setMissionData] = useState({});

    useEffect(()=>{
        (async () =>{
            const response = await fetch("https://api.spaceXdata.com/v3/launches?limit=100");  
            const data = await response.json();
            setMissionData(data);
        })();

    }, []);

    useEffect(()=>{
        let url = new URL('https://api.spaceXdata.com/v3/launches?limit=100');
        if(launch){
            url.searchParams.append('launch_success', launch);
        }
        if(landing){
            url.searchParams.append('land_success', landing);
        }
        if(year){
            url.searchParams.append('launch_year', year);
        }

        const fetchData = async () => {
        const response = await fetch(url.href);  
        const data = await response.json();
       
        setMissionData(data);
        };
       
        fetchData();
    },[launch, landing, year]);
  return (
    <div className="home">
        <h1>SpaceX Launch Program</h1>
        <div className="home-box">
            <Filter
            year={year}
            launch={launch}
            landing={landing}
            setYear={setYear} 
            setLaunch={setLaunch} 
            setLanding={setLanding}/>
            <SpacePrograms data={missionData}/>
        </div>
        <h4>Develoved by: Karan Mahajan</h4>
    </div>
  );
};

export default Home;
