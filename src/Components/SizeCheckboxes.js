import React from "react";
import { Checkbox } from "@mui/material";
import { pink } from "@mui/material/colors";



const label={'inputProps':{'aria-label':"Checkbox demo"}};

export default function SizeCheckboxes(){

    return(
        <div>
            <Checkbox {...label} defaultChecked size="small" />
            <Checkbox {...label} defaultChecked  />
            <Checkbox {...label} defaultChecked sx={{'.& MuiSvgIcon-root':{'fontSize':30}}} />



            <Checkbox {...label} defaultChecked size="small" color="primary" />
            <Checkbox {...label} defaultChecked color="secondary" />
            <Checkbox {...label} defaultChecked color="success" />
            <Checkbox {...label} defaultChecked sx={{color:pink[800], '&.Mui-checked':{color:pink[600]}}} />
            <Checkbox {...label} defaultChecked sx={{color:pink[500], '.& MuiSvgIcon-root':{'fontSize':30}}} />


        </div>
    )
}