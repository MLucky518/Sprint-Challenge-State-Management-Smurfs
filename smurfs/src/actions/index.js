import axios from "axios";

export const FETCHING_SMURF_START = "FETCHING_SMURF_START";
export const FETCHING_SMURF_SUCCESS = "FETCHING_SMURF_SUCCESS";
export const ADD_SMURF = "ADD_SMURF";


export const getSmurfs = () => dispatch =>{

    dispatch({type:FETCHING_SMURF_START});


    axios

    .get("http://localhost:3333/smurfs")


    .then(res =>{
        console.log(res.data);
        res.data.map(smurf =>{
           console.log(smurf);
           dispatch({type:FETCHING_SMURF_SUCCESS,payload:smurf});
        })
        
    })

    .catch(err =>{
        console.log(err , "cannot get smurfs");
    });
};

export const addSmurf = (smurf) => dispatch =>{
    axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(res => {
        
        dispatch({type: ADD_SMURF, payload: smurf});
    }) 
    .catch(err => {
       
     console.log(err, "error");
    }) 

};