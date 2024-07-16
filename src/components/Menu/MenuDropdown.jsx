import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import { commonAssets } from "../../constants/assetfiles";
import "./menudropdown.scss";

const MenuDropdown = ({ backgroundColor }) => {
  const [age, setAge] = useState(10);
  const handleChange = (e) => {
    setAge(e.target.value);
  };
  const DropdownIcon = commonAssets["dropdown"];
  return (
    <Box sx={{ backgroundColor: backgroundColor }}>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        IconComponent={DropdownIcon}
        label="Age"
        onChange={handleChange}
        className="menu-dropdown-wrapper label1regular"
      >
        <MenuItem value={10}>This Week</MenuItem>
        <MenuItem value={20}>This Month</MenuItem>
        <MenuItem value={30}>This Year</MenuItem>
      </Select>
    </Box>
  );
};

export default MenuDropdown;
