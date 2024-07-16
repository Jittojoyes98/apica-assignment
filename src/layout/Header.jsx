import Box from "@mui/material/Box";
import React from "react";
import MenuDropdown from "../components/Menu/MenuDropdown";

const Header = () => {
  const menuBackgroundColor = "#fef5ea";
  return (
    <Box sx={{ display: "flex", flexGrow: 1 }}>
      <p className="sub3medium color-black-6">Dashboard</p>
      <Box>
        <Box
          sx={{
            display: "flex",
            borderRadius: "8px",
            gap: "10px",
            padding: "6px 12px",
            backgroundColor: menuBackgroundColor,
          }}
        >
          <MenuDropdown />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
