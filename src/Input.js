import { Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import {actionTypes} from "./reducer"
import {useDispatch} from 'react-redux';
import { useStateValue } from "./StateProvider";
import "./Input.css"
function InputData() {
    const dispatch = useDispatch()
    const [input, setInput] = useState("")
    // const [state,dispatch]=useStateValue();
    return (
        <div className="inputData">
            <form >
                <TextField value={input} onChange={(e)=>(setInput(e.target.value)
                     )} id="outlined-basic" label="Add your tasks"></TextField>
                <Button className="button" variant="contained" color="secondary" onClick={()=>dispatch({
                    type:'Add_TODO',
                    payload:{
                        label:input,
                        id: Math.ceil(Math.random() *100),
                    }
                })}>
                 Add
                 </Button>
            </form>            
        </div>
    )
}

export default InputData
