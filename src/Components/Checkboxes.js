import * as React from 'react';

import Checkbox from '@mui/material/Checkbox';
import {  Stack } from '@mui/system';

const label={'inputProps':{'aria-label':"Checkbox demo"}};

export default function Checkboxes(){
    return(
        <Stack direction={"column"} spacing={4} >
            <Checkbox {...label} defaultChecked />
            <Checkbox {...label} />
            <Checkbox {...label} disabled />
            <Checkbox {...label} disabled checked />
        </Stack>
    )
}