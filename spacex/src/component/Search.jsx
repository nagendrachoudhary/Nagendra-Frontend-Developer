import React, { useEffect, useState } from "react";
import { getdata } from "../Api";

export default function Search(props) {
  return (
    <div className="search">
     <input placeholder="status" onChange={(e)=>{props.handlestatus(e.target.value)}}></input>
     <input placeholder="original_launch" onChange={(e)=>{props.handledate(e.target.value)}} type="number" min="1900" max="2099" step="1" value={null}></input>
     <input placeholder="type" onChange={(e)=>{props.handletype(e.target.value)}}></input>
    </div>
  );
}
