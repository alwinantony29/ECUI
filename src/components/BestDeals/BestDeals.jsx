import React from 'react'
import CustomCard from './CustomCard'
import { Box, Button, Container, Grid, Typography } from '@mui/material'

const BestDeals = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <Container sx={{mt:3}}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5" fontWeight={600} component="h3" >
          Best Deals
        </Typography>
        <Button variant="text"> View all</Button>
      </Box>
      <Grid mt={3} container rowGap={2} >
        {arr.map((item, i) => {
          return (<Grid sx={{display:"flex",justifyContent:"center"}}
           key={i} item xs={6} md={4} lg={3} >
            <CustomCard />
          </Grid>
          )
        })}
      </Grid>
    </Container>
  )
}

export default BestDeals