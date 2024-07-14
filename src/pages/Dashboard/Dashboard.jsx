import React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import "./dashboard.scss"
import Card from "../../components/Card/Card";
import { CardData } from "../../constants/mock";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Dashboard = () => {
  return (
  <Box className="dashboard-wrapper">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {
            CardData.map((card,index)=>{
              return (
                <Grid item xs={12} md={((index+1) % 3 === 0 ? 5 : 3.5)} sm={((index+1) % 3 === 0 ? 6 : 12)} key={index}>
                  <Card card={card}/>
                </Grid>
              )
            })
          }
          <Grid item xs={12} md={4} sm={6}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={12} md={4} sm={6}>
            <Item>xs=5</Item>
          </Grid>
          <Grid item xs={12} md={4} sm={12}>
            <Item>xs=6</Item>
          </Grid>
          <Grid item xs={12} md={6} sm={12}>
            <Item>xs=7</Item>
          </Grid>
      </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
