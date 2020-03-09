import React ,{ useState }from 'react';
import { connect, useSelector } from "react-redux";
import axios from "axios";

function Form(props) {
    const [smurf,setSmurf] =  useState({name:"",age:"",height:""});
    const state = useSelector(state => state);

    const handleChanges = event =>{
        setSmurf({...smurf,[event.target.name]:event.target.value})
    }

    const handleSubmit = e =>{
        e.preventDefault();
        props.addSmurf(smurf);
        
        

    }

    return (
        <div>
            <form onSubmit = {handleSubmit} >
                <input
                name = "name"
                type = "text"
                placeholder = "name"
                value = {smurf.name}
                onChange = {handleChanges}
            
                />

                <input
                
                name = "age"
                type = "number"
                placeholder = "age"
                value = {smurf.age}
                onChange = {handleChanges}

                />

                <input 
                
                name = "height"
                type = "text"
                placeholder = "height"
                value = {smurf.height}
                onChange = {handleChanges}
                
                
                />
                    <input value = "Submit"type = "submit"/>

            </form>
            
        </div>
    )
}

export default connect(null,{})(Form);
