import React from 'react';

function DataCard(props) {
    let data=props.data
   let date=JSON.stringify(data.original_launch)
   let date1=date.split('T')
    return (
        <div>
            <div className="card">
                
                {data.links?<img src={data.links.mission_patch}/>:<img src='https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/for_press_release.jpg?itok=dYqEJLAy'/>}
                {data.core_serial&&<p>serial No.:-{data.core_serial}</p>}
                {data.launch_site&&<p>{data.launch_site.site_name_long}</p>}
                {data.capsule_id&&<p>capsule id:-{data.capsule_id}</p>}
                {data.missions&&data.missions.length>0&&<p>missions:-{data.missions[0].name}</p>}
                {data.status&&<p>status:-{data.status}</p>}
                {data.details&&<p style={{maxWidth:'100%',maxHeight:'20px' , overflow:'hidden'}}>details:-{data.details}</p>}
                {data.launch_year&&<p>launch year:-{data.launch_year}</p>}
                {<p>{date1[0]}</p>}
            </div>
        </div>
    );
}

export default DataCard;