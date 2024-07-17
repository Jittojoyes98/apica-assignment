import Box from "@mui/material/Box";
import React from "react";
import MenuDropdown from "../components/Menu/MenuDropdown";
import { commonAssets } from "../constants/assetfiles";

const Header = ({ open }) => {
  const menuBackgroundColor = "#fef5ea";
  const NotificationIcon = commonAssets["notification"];
  const ProfileImage = commonAssets["profile"];
  return (
    <Box
      sx={{
        display: "flex",
        flexGrow: 1,
        justifyContent: "space-between",
        padding: `0px ${open ? "0px" : "19px"}`,
      }}
    >
      <p className="sub3medium color-black-6">Dashboard</p>
      <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
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
        <NotificationIcon />
        <img src={ProfileImage} alt="profile-pic" />
      </Box>
    </Box>
  );
};

export default Header;
