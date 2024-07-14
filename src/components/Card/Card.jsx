import React from "react";
import Box from '@mui/material/Box';
import "./card.scss";
import Menu from "../Menu/MenuDropdown";
import MenuDropdown from "../Menu/MenuDropdown";

const Card = ({card}) => {

  const CardIcon=card.icon

  return (
    <Box className="card-wrapper">
        <Box className="card-content">
            <Box className="card-duration">
                <Box>
                    <Box className='card-logo-type' sx={{backgroundColor:"red"}}>
                        <CardIcon/>
                    </Box>
                </Box>
                <Box>
                    <MenuDropdown/>
                </Box>
            </Box>
            <Box className="card-duration">
                {
                    card.data.map((stats,index)=>{
                        return (
                            <Box key={index}>
                                <Box sx={{marginBottom:"8px"}}>
                                    <p className="p2regular interfont color-black-3">{stats.heading}</p>
                                </Box>
                                <Box className="center" sx={{gap:"7px"}}>
                                    <span className="sub3medium color-black-6">{stats.value.current}</span>
                                    {
                                        stats.value?.increase ? <span className="label1regular color-green-10">{stats.value.increase}</span> : <></>
                                    }       
                                </Box> 
                            </Box>
                        )
                    })
                }
            </Box>
        </Box>
    </Box>
  );
};

export default Card;
