import React, { useEffect } from "react";
import { getSmurfs } from "../actions/index";
import { connect, useSelector } from "react-redux";
import { addSmurf,deleteSmurf } from "../actions/index";
import Form from "./Form";

function Smurfs({ getSmurfs, addSmurf,deleteSmurf }) {
  const state = useSelector(state => state);
  console.log(state);

  useEffect(() => {
    getSmurfs();
  }, [getSmurfs]);

  return (
    <div>
      {state.smurfs.map((smurf)=> {
        return (
          <div className = "smurf-list">
            <h1>name:{smurf.name}</h1>
            <p>age:{smurf.age}</p>
            <button onClick = {()=>deleteSmurf(smurf)}>DELETE</button>
          </div>
        );
      })}

      <Form addSmurf={addSmurf} />
    </div>
  );
}

export default connect(null, { getSmurfs, addSmurf ,deleteSmurf})(Smurfs);
