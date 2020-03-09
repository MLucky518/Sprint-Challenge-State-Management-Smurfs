import React , {useEffect} from 'react';
import { getSmurfs } from "../actions/index";
import { connect, useSelector } from "react-redux";
import {addSmurf} from "../actions/index";
import Form from "./Form";

function Smurfs({getSmurfs,addSmurf}) {
  const state = useSelector(state =>state);
  console.log(state);

    useEffect(() => {
        getSmurfs();
    }, [getSmurfs])


    return (
        <div>
           {state.smurfs.map(smurf =>{
               return( <h1>{smurf.name}</h1>

               )
           })}

           <Form addSmurf = {addSmurf}/>

        </div>
    )
}

export default connect(null,{getSmurfs,addSmurf})(Smurfs);
