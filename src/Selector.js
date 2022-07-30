import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Selector({ legitData, setJsonData }) {

    const handleChange = (event) => {
        const required = event.target.value
        const filteredjson = legitData.main.filter((value) => {
            return value.heading === required
        })
        setJsonData(filteredjson)
    }

    return (
        <Box sx={{ minWidth: 40 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Photos</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Photos"
                    onChange={handleChange}
                >
                    {
                        legitData.main.map((values) => {
                            return (
                                <MenuItem value={values.heading} key={values.id} >{values.heading}</MenuItem>
                            )
                        })
                    }
                </Select>
            </FormControl>
        </Box>
    )
}

export default Selector