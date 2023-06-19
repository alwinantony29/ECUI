import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
  return (
    <Paper
    elevation={0}
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300 ,justifyContent:"center",background: "#F8F8F8",}}
    >
      <InputBase
        sx={{ ml: 1, flex: 1,
        }}
        placeholder="Search here .."
        inputProps={{ 'aria-label': 'search here' }}
      />
      <IconButton color='primary' type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon /> 
      </IconButton>      
    </Paper>
  );
}