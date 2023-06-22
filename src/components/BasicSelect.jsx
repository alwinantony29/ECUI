import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
export default function BasicSelect() {
  const [item, setItem] = useState('');

  const handleChange = (event) => {
    setItem(event.target.value);
  };
  return (
    <Box sx={{ minWidth: 120, background: "#F8F8F8", }} >
      <FormControl size='small' variant="filled" fullWidth>
        <InputLabel id="demo-simple-select-label">Classified</InputLabel>
        <Select sx={{ background: "#F8F8F8" }}
          IconComponent={KeyboardArrowDownIcon}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={item}
          label="Classified"
          onChange={handleChange}
        >
          <MenuItem value={10}>Classified1</MenuItem>
          <MenuItem value={20}>Classified2</MenuItem>
          <MenuItem value={30}>Classified3</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}