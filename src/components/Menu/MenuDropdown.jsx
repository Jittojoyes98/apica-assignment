import React, { useState } from "react";
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Select from '@mui/material/Select';
import { commonAssets } from "../../constants/assetfiles";



const MenuDropdown = () => {
  const [age,setAge]=useState(10)
  const handleChange=(e)=>{
    setAge(e.target.value)
  }
  const DropdownIcon=commonAssets["dropdown"];
  return (
    <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        MenuProps={{
            PaperProps:{
                sx: {},
            },
        }}
        IconComponent={()=>(<DropdownIcon/>)}
        label="Age"
        onChange={handleChange}
        className="menu-dropdown-wrapper"
    >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
    </Select>
  );
};

export default MenuDropdown;
