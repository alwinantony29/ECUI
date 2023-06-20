import { Box, Grid, Paper, Rating, Typography } from '@mui/material'
import React from 'react'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Star } from '@mui/icons-material';
const CustomCard = () => {
  return (
    <>
      <Box width={'230px'} margin={0} p={0} sx={{
        display: 'flex',
        justifyContent: 'space-between',
         alignItems: 'center'
      }}
         >
          <img style={{
            height: '110px',
            width: '110px',
            borderRadius: ' 20px',
          }} src="src/components/BestDeals/placeholder.png" alt="" />
        
        <Box width={"110px"} item 
        sx={{ flexDirection: "column", display: 'flex',
              justifyContent: 'center', alignItems: 'flex-start' }} >
          <Box>
            <Typography fontWeight={500} variant={"subtitle2"}
             component={"span"} >
              Fitness & activity tracker
            </Typography>
          </Box>
          <Box mt={1}>
            <Typography display={'flex'} color='primary' 
            sx={{fontWeight:"800"}}>
              <AttachMoneyIcon  fontSize='small' />99.9
            </Typography>
          </Box>
          <Box mt={1} sx={{ display: "flex" }}>
            <Rating max={4} sx={{color:'primary'}} name="read-only" size='small' value={5} readOnly />
            <Typography variant='subtitle2'>
              (112)
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default CustomCard
