import React from "react";
import { FormControlLabel, FormGroup } from "@mui/material";

import { Checkbox } from "@mui/material";

 function CheckBoxLabel(){

    return(
        <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label="label" />
        <FormControlLabel disabled control={<Checkbox />} label="disabled" />
        </FormGroup>
    )
}

export default CheckBoxLabel;