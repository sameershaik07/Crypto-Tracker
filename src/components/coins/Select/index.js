import { React, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "./style.css"

export default function BasicSelect({days, handleChange, notP }) {
  

 

  return (
    <div className='selectdays' sx={{ maxWidth: 120 }}>

     {!notP && <p>Price change in </p>}
      {/* <InputLabel id="demo-simple-select-label">Days</InputLabel> */}
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={ days}
        label="Days"
        onChange={(e)=>handleChange(e)}

        sx={{
          height: "2.5rem",
          color: "var(--white)",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--white)",
          },
          "& .MuiSvgIcon-root": {
            color: "var(--white)",
          },
          "&:hover": {
            "&& fieldset": {
              borderColor: "#3a80e9",
            },
          },
        }}
      >
        <MenuItem value={7}>7 days</MenuItem>
        <MenuItem value={30}>30 days</MenuItem>
        <MenuItem value={60}>60 days</MenuItem>
        <MenuItem value={90}>90 days</MenuItem>
        <MenuItem value={120}>120 days</MenuItem>
        <MenuItem value={365}>1 year</MenuItem>

      </Select>

    </div>
  );
}
