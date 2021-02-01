import React from 'react'
import "./Show.css"
import {useDispatch} from 'react-redux';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
function Show({data,id}) {
    const dispatch = useDispatch()
    console.log(data)
    return (
        <div className="show"> 
            <div className="data">
            <h4>{data}</h4>
            </div>
            <div className="check">
            <CheckBoxIcon ></CheckBoxIcon>
            </div>
            <div className="delete">
            <HighlightOffIcon onClick={()=>dispatch({
                type:'Delete_TODO',
                payload:id,
            })}></HighlightOffIcon>
            </div>
        </div>
    )
}

export default Show
