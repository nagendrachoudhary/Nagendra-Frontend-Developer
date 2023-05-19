import React, { useEffect } from 'react'
import DataCard from './DataCard'

export default function Data(props) {
  let data=props.data
  return (
    <div className='allCards'>
      {data.length>0&&data.map((el,i)=>{
        return ( <DataCard data={el}/>)
      })}
    </div>
  )
}
