import React from 'react'

export default function Pagenation(props) {
let arr= new Array(props.totalpage).fill(1)
  return (
    <div className='page'>
       {props.totalpage&&<button onClick={(e)=>{props.page((+props.currpage-1)>0?(+props.currpage)-1:1)}}>Prv</button>} 
        {arr.map((el,i)=>{
            let active=(props.currpage==(i+1))
            return(<button style={{borderColor:active&&'red'}} name={i+1} onClick={(e)=>{props.page((+e.target.name))}}>{i+1}</button>)
        })}
        {props.totalpage&&<button onClick={(e)=>{props.page((+props.currpage+1)<(+props.totalpage)?(+props.currpage+1):(+props.totalpage))}}>Next</button>}
       
    </div>
  )
}
